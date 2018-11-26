from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.
class Tag(models.Model):
    tid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)

class Video(models.Model):
    vid = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    description = models.TextField(null=True)
    category = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user")

    like = models.ManyToManyField(User, related_name="userLikeVideos")
    dislike = models.ManyToManyField(User, related_name="userDislikeVideos")
    tag = models.ManyToManyField(Tag, related_name="tagVideos")

class Comment(models.Model):
    cid = models.AutoField(primary_key=True)
    vid = models.ForeignKey(Video, on_delete=models.CASCADE, db_column="vid")
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user")
    content = models.TextField()
    datetime = models.DateTimeField(auto_now_add=True)
    
    parent = models.ForeignKey("Comment", on_delete=models.CASCADE, db_column="p_cid", null=True)
    like = models.ManyToManyField(User, related_name="userLikeComments")
    dislike = models.ManyToManyField(User, related_name="userDisLikeComments")

class Follow(models.Model):
    fid = models.AutoField(primary_key=True)
    follower = models.ForeignKey(User, on_delete=models.CASCADE, db_column="follower", related_name="user")
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user", related_name="follower")

    class Meta:
        unique_together = ('user', 'follower',)

class CommunityMessage(models.Model):
    cmid = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user")
    message = models.TextField(null=False)
    datetime = models.DateTimeField(auto_now_add=True)
    imageAddr = models.CharField(max_length=300, null=True)
    videoAddr = models.CharField(max_length=300, null=True)

    like = models.ManyToManyField(User, related_name="userLikeMessages")
    dislike = models.ManyToManyField(User, related_name="userDislikeMessages")

class PlayList(models.Model):
    pid = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, db_column="user")
    name = models.CharField(max_length=100)

    vid = models.ManyToManyField(Video, related_name="videoPlayists")