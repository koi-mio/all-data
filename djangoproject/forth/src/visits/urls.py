from django.urls import path
from . import views

urlpatterns = [
    path("", views.visit_list, name="visit_list"),
    path("create/", views.visit_create, name="visit_create"),
    path("<int:visit_id>/edit/", views.visit_edit, name="visit_edit"),
    path("<int:visit_id>/delete/", views.visit_delete, name="visit_delete"),
    path("visit/<int:visit_id>/comment/", views.comment_create, name="comment_create"),
    path("register/", views.register, name="register"),
]
