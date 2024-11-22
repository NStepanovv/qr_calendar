from django.urls import path
from . import views

urlpatterns = [
    path('<int:week_number>/', views.get_video),
]