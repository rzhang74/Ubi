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
    r = JsonResponse({"token": token.key, "username": user.email}, status=status.HTTP_202_ACCEPTED)
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
