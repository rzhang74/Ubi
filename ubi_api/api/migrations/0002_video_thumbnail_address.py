# Generated by Django 2.0.2 on 2018-12-09 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='thumbnail_address',
            field=models.CharField(default='/video.jpg', max_length=300),
        ),
    ]
