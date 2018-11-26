from rest_framework import serializers

from api.models import *
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'date_joined')

class VideoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Video
    fields = ('vid', 'name', 'address', 'description', 'category', 'user')

class CommentSerializer(serializers.ModelSerializer):
  class Meta:
    model = Comment
    fields = ('cid', 'user', 'content', 'parent')

class CommunityMessageSerializer(serializers.ModelSerializer):
  class Meta:
    model = CommunityMessage
    fields = ('user', 'message', 'datetime', 'imageAddr', 'videoAddr')
     