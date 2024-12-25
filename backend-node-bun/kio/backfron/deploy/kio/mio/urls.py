from django.urls import path
from . import views


urlpatterns = [
    path("", views.mio_list, name="mio_list"),
    path("create/", views.mio_create, name="mio_create"),
    path("<int:mio_id>/edit/", views.mio_edit, name="mio_edit"),
    path("<int:mio_id>/delete/", views.mio_delete, name="mio_delete"),
    path("mio/<int:mio_id>/comment/", views.comment_create, name="comment_create"),
    path("register/", views.register, name="register"),
]
