from django.urls import re_path, path, include
from api import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login', views.app_login),
    path('register', views.app_register),
    path('logout', views.app_logout),
    path('get_personal_info', views.get_personal_info),
    path('get_user_by_id', views.get_user_by_id),
    path('get_user_by_email', views.get_user_by_email),
    path('follow_by_id', views.follow_by_id),
    path('unfollow_by_id', views.unfollow_by_id),
    path('follow_by_email', views.follow_by_email),
    path('unfollow_by_email', views.unfollow_by_email),
    path('upload_video', views.upload_video),
    path('get_video_by_id', views.get_video_by_id),
    path('get_videos_by_user_email', views.get_videos_by_user_email),
    path('like_video', views.like_video),
    path('like_video_cancel', views.like_video_cancel),
    path('dislike_video', views.dislike_video),
    path('dislike_video_cancel', views.dislike_video_cancel),
    path('add_comment', views.add_comment),
    path('get_comments', views.get_comments),
    path('get_messages_by_user_id', views.get_messages_by_user_id),
    path('add_message', views.add_message)
]