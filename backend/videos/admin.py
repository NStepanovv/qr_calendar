from django.contrib import admin
from .models import Video

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('week_number', 'release_date', 'video_file')  # Настраиваем отображение