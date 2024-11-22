from django.shortcuts import render

from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Video
from datetime import date

def get_video(request, week_number):
    video = get_object_or_404(Video, week_number=week_number)
    if date.today() < video.release_date:
        return JsonResponse({
            "message": f"Данное видео пока не доступно. Дата доступа: {video.release_date}."
        }, status=403)
    return JsonResponse({
        "week_number": video.week_number,
        "video_url": video.video_file.url,
        "release_date": video.release_date,
    })