from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from django.db.utils import IntegrityError
from django.contrib.auth import logout, login, authenticate

from .models import *
from .serializers import *

from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, parser_classes, permission_classes

from django.forms.models import model_to_dict
from datetime import date, datetime

# Create your views here.
def index(request):
    return HttpResponse("Hello and Farewell :)")

## ------------------------------- Authentication Related --------------------------

# login request handler
@api_view(['POST'])
@parser_classes((JSONParser,))
def app_login(request):
    print("hello")
    uname = request.data.get('email')
    passwd = request.data.get('password')
    user = authenticate(username=uname, password=passwd)
    if user:
        login(request._request, user)  
    else:
        return Response({"token": ""}, status=status.HTTP_403_FORBIDDEN)
    
    # generate token for client
    token, _ = Token.objects.get_or_create(user=user)
    r = JsonResponse({"token": token.key, "username": user.email}, status=status.HTTP_200_OK)
    print(token.key)
    r.set_cookie(key="token", value=token.key)
    return r

# signup request handler
@api_view(['POST'])
@parser_classes((JSONParser,))
def app_register(request):
    uname = request.data.get('email')
    passwd = request.data.get('password')
    email = request.data.get('username')

    try:
        u = User(username=uname, password=passwd, email=email)
        u.set_password(passwd)
        u.save()
        return Response(status=status.HTTP_201_CREATED)
    
    # user already exist in database
    except IntegrityError:
        return Response(status=status.HTTP_409_CONFLICT)

# logout request handler
@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def app_logout(request):
    print('hi')
    logout(request._request)
    request.user.auth_token.delete()
    r = Response() 
    r.delete_cookie('token')
    r.status_code = status.HTTP_200_OK
    return r

## ------------------------------- User Related --------------------------
# get a user, follow a user, unfollow a user
@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_personal_info(request):
    u = request._request.user
    u_ser = UserSerializer(u)
    return JsonResponse(u_ser.data)

@api_view(['GET'])
def get_user_by_id(request):
    uid = request.query_params.get('uid')
    users = User.objects.filter(id=uid)
    if(len(users)>0):
        u = users[0]
        u_ser = UserSerializer(u)
        return JsonResponse(u_ser.data)
    else:
        return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)

#hack it by putting email in username so..
@api_view(['GET'])
def get_user_by_email(request):
    username = request.query_params.get('username')
    users = User.objects.filter(username=username)
    if(len(users)>0):
        u = users[0]
        u_ser = UserSerializer(u)
        return JsonResponse(u_ser.data)
    else:
        return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def follow_by_id(request):
    u = request._request.user
    uid = request.data.get('uid')
    print(uid)
    users = User.objects.filter(id=uid)
    if(len(users)>0):
        user = users[0]
        try:
            f = Follow(follower=u, user=user)
            f.save()
            return Response(status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response(status=status.HTTP_409_CONFICT)
    else:
            print('here')
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def follow_by_email(request):
    u = request._request.user
    username = request.data.get('username')
    users = User.objects.filter(username=username)
    if(len(users)>0):
        user = users[0]
        try:
            f = Follow(follower=u, user=user)
            f.save()
            return Response(status=status.HTTP_201_CREATED)
        except IntegrityError:
            return Response(status=status.HTTP_409_CONFLICT)
    else:
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def unfollow_by_id(request):
    u = request._request.user
    uid = request.data.get('uid')
    print(uid)
    users = User.objects.filter(id=uid)
    if(len(users)>0):
        user = users[0]
        fs = Follow.objects.filter(follower=u).filter(user=user)
        if(len(fs)>0):
            f = fs[0]
            try:
                f.delete()
                return Response(status=status.HTTP_200_OK)
            except IntegrityError:
                return Response(status=status.HTTP_409_CONFICT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    else:
            return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def unfollow_by_email(request):
    u = request._request.user
    username = request.data.get('username')
    users = User.objects.filter(username=username)
    if(len(users)>0):
        user = users[0]
        fs = Follow.objects.filter(follower=u).filter(user=user)
        if(len(fs)>0):
            f = fs[0]
            try:
                f.delete()
                return Response(status=status.HTTP_200_OK)
            except IntegrityError:
                return Response(status=status.HTTP_409_CONFICT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

## ------------------------------- Video Related --------------------------
# get a video, create a video, like, dislike, add tags
@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def upload_video(request):
    u = request._request.user
    name = request.data.get('name')
    address = request.data.get('address')
    description = request.data.get('description')
    category = request.data.get('category')
    try:
        video = Video(name=name,address=address,description=description,category=category,user=u)
        video.save()
        return Response(status=status.HTTP_201_CREATED)
    except IntegrityError:
        return Response(status=status.HTTP_409_CONFLICT)

@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_video_by_id(request):
    vid = request.query_params.get('vid')
    videos = Video.objects.filter(vid=vid)
    if(len(videos)>0):
        video = videos[0]
        v_ser = VideoSerializer(video)
        return JsonResponse(v_ser.data)
    else:
        return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
@permission_classes((IsAuthenticated,))
def get_videos_by_user_email(request):
    username = request.query_params.get('username')
    print(username)
    users = User.objects.filter(username=username)
    if(len(users)>0):
        user = users[0]
        videos = Video.objects.filter(user=user)
        ret = []
        for video in videos:
            ret.append(VideoSerializer(video).data)
        return JsonResponse(ret, safe=False)
    else:
        return JsonResponse({}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))    
def like_video(request):
    u = request._request.user
    vid = request.data.get('vid')
    videos = Video.objects.filter(vid=vid)
    if(len(videos)>0):
        video = videos[0]
        video.like.add(u)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes((IsAuthenticated,))    
def like_video_cancel(request):
    print("!!")
    u = request._request.user
    vid = request.data.get('vid')
    print(vid)
    videos = Video.objects.filter(vid=vid)
    if(len(videos)>0):
        video = videos[0]
        video.like.remove(u)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
@permission_classes((IsAuthenticated,))    
def dislike_video(request):
    u = request._request.user
    vid = request.data.get('vid')
    videos = Video.objects.filter(vid=vid)
    if(len(videos)>0):
        video = videos[0]
        video.dislike.add(u)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['DELETE'])
@permission_classes((IsAuthenticated,))    
def dislike_video_cancel(request):
    u = request._request.user
    vid = request.data.get('vid')
    videos = Video.objects.filter(vid=vid)
    if(len(videos)>0):
        video = videos[0]
        video.dislike.remove(u)
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

## ------------------------------- Comment Related --------------------------
# add comment, get comment, like comment, dislike comment
@api_view(['POST'])
@permission_classes((IsAuthenticated,))    
def add_comment(request):
    u = request._request.user
    vid = request.data.get('vid')
    parent_cid = request.data.get('parent_cid')
    content = request.data.get('content')
    videos = Video.objects.filter(vid=vid)
    if(len(videos)>0):
        video = videos[0]
        if(parent_cid==-1):
            c = Comment(vid=video, user=u, content=content)
            c.save()
        else:
            parent_comments = Comment.objects.filter(cid=parent_cid)
            c = Comment(vid=video, user=u, content=content, parent=parent_comments[0])
            c.save()     
        return Response(status=status.HTTP_200_OK)
    else:
        return Response(status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def get_comments(request):
    vid = request.query_params.get('vid')
    videos = Video.objects.filter(vid=vid)
    video = videos[0]
    comments = Comment.objects.filter(vid=video) 
    ret = []
    for comment in comments:
        ret.append(CommentSerializer(comment).data)
    return JsonResponse(ret, safe=False) 

## ------------------------------- Community Related --------------------------
# add message, get message
@api_view(['GET'])
def get_messages_by_user_id(request):
    uid = request.query_params.get('uid')
    users = User.objects.filter(id=uid)
    user = users[0]
    messages = CommunityMessage.objects.filter(user=user)
    ret = []
    for message in messages:
        ret.append(CommunityMessageSerializer(message).data)
    return JsonResponse(ret, safe=False) 

@api_view(['POST'])
@permission_classes((IsAuthenticated,))
def add_message(request):
    u = request._request.user
    message = request.data.get('message')
    imageAddr = request.data.get('imageAddr')
    videoAddr = request.data.get('videoAddr')
    try:
        m = CommunityMessage(user=u, message=message, imageAddr=imageAddr, videoAddr=videoAddr)
        m.save()
        return Response(status=status.HTTP_201_CREATED)
    except IntegrityError:
        return Response(status=status.HTTP_409_CONFLICT)
