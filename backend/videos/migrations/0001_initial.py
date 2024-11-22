# Generated by Django 5.1.3 on 2024-11-22 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Video',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('week_number', models.PositiveIntegerField(unique=True)),
                ('video_file', models.FileField(upload_to='videos/')),
                ('release_date', models.DateField()),
            ],
        ),
    ]