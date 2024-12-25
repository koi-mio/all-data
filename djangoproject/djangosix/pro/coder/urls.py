from django.urls import path
from . import views

urlpatterns = [
    path("", views.coder_list, name="coder_list"),
    path("create/", views.coder_create, name="coder_create"),
    path("<int:coder_id>/edit/", views.coder_edit, name="coder_edit"),
    path("<int:coder_id>/delete/", views.coder_delete, name="coder_delete"),
    path("coder/<int:coder_id>/comment/", views.comment_create, name="comment_create"),
    path("register/", views.register, name="register"),
]
