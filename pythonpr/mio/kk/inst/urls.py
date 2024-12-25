from django.urls import path
from . import views

urlpatterns = [
    path("", views.inst_list, name="inst_list"),
    path("create/", views.inst_create, name="inst_create"),
    path("<int:inst_id>/edit/", views.inst_edit, name="inst_edit"),
    path("<int:inst_id>/delete/", views.inst_delete, name="inst_delete"),
    path("register/", views.register, name="register"),
]
 