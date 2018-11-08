from django.urls import re_path, path, include
from api import views

urlpatterns = [
    path('', views.index, name="index"),
    path('login', views.app_login),
    path('register', views.app_register),
    path('logout', views.app_logout),
]