from django.urls import path
from . import views

urlpatterns = [
    path("", views.all_bigproject, name="all_bigproject"),
    path("<int:project_id>/", views.project, name="projects"),
]
