from django.urls import path
from . import views

urlpatterns = [
    path("", views.nio_list, name="nio_list"),
    path("create/", views.nio_create, name="nio_create"),
    path("<int:nio_id>/edit/", views.nio_edit, name="nio_edit"),
    path("<int:nio_id>/delete/", views.nio_delete, name="nio_delete"),
    path("nio/<int:nio_id>/comment/", views.comment_create, name="comment_create"),
    path("register/", views.register, name="register"),
]
