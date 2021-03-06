# Generated by Django 2.0.2 on 2018-11-23 20:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('cid', models.AutoField(primary_key=True, serialize=False)),
                ('content', models.TextField()),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('dislike', models.ManyToManyField(related_name='userDisLikeComments', to=settings.AUTH_USER_MODEL)),
                ('like', models.ManyToManyField(related_name='userLikeComments', to=settings.AUTH_USER_MODEL)),
                ('parent', models.ForeignKey(db_column='p_cid', null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Comment')),
                ('user', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='CommunityMessage',
            fields=[
                ('cmid', models.AutoField(primary_key=True, serialize=False)),
                ('message', models.TextField()),
                ('datetime', models.DateTimeField(auto_now_add=True)),
                ('imageAddr', models.CharField(max_length=300, null=True)),
                ('videoAddr', models.CharField(max_length=300, null=True)),
                ('dislike', models.ManyToManyField(related_name='userDislikeMessages', to=settings.AUTH_USER_MODEL)),
                ('like', models.ManyToManyField(related_name='userLikeMessages', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Follow',
            fields=[
                ('fid', models.AutoField(primary_key=True, serialize=False)),
                ('follower', models.ForeignKey(db_column='follower', on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, related_name='follower', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='PlayList',
            fields=[
                ('pid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('user', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('tid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('vid', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=300)),
                ('description', models.TextField(null=True)),
                ('category', models.CharField(max_length=50)),
                ('dislike', models.ManyToManyField(related_name='userDislikeVideos', to=settings.AUTH_USER_MODEL)),
                ('like', models.ManyToManyField(related_name='userLikeVideos', to=settings.AUTH_USER_MODEL)),
                ('tag', models.ManyToManyField(related_name='tagVideos', to='api.Tag')),
                ('user', models.ForeignKey(db_column='user', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='playlist',
            name='vid',
            field=models.ManyToManyField(related_name='videoPlayists', to='api.Video'),
        ),
        migrations.AddField(
            model_name='comment',
            name='vid',
            field=models.ForeignKey(db_column='vid', on_delete=django.db.models.deletion.CASCADE, to='api.Video'),
        ),
        migrations.AlterUniqueTogether(
            name='follow',
            unique_together={('user', 'follower')},
        ),
    ]
