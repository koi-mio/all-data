from django.urls import path
from . import views

urlpatterns = [
    path("", views.kio_list, name="kio_list"),
    path("create/", views.kio_create, name="kio_create"),
    path("<int:kio_id>/edit/", views.kio_edit, name="kio_edit"),
    path("<int:kio_id>/delete/", views.kio_delete, name="kio_delete"),
    path("kio/<int:kio_id>/comment/", views.comment_create, name="comment_create"),
    path("register/", views.register, name="register"),
]
