from django.db import models

class Video(models.Model):
    week_number = models.PositiveIntegerField(unique=True)
    video_file = models.FileField(upload_to='videos/')
    release_date = models.DateField()

    def __str__(self):
        return f"Week {self.week_number} - {self.release_date}"