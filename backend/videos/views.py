from django.shortcuts import render

from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Video
from datetime import date
from django.utils.timezone import now

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

def latest_available_video(request):
    latest_video = Video.objects.filter(release_date__lte=now()).order_by('-release_date').first()
    if latest_video:
        return JsonResponse({
            'week_number': latest_video.week_number,
            'release_date': latest_video.release_date,
        })
    else:
        return JsonResponse({'error': 'No videos available'}, status=404)