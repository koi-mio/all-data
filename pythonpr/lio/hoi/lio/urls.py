from django.urls import path
from . import views

urlpatterns = [
    path("", views.lio_list, name="lio_list"),
    path("create/", views.lio_create, name="lio_create"),
    path("<int:lio_id>/edit/", views.lio_edit, name="lio_edit"),
    path("<int:lio_id>/delete/", views.lio_delete, name="lio_delete"),
    path("register/", views.register, name="register"),
]
