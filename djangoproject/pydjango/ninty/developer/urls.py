from django.urls import path
from . import views

urlpatterns = [
    path("", views.developer_list, name="developer_list"),
    path("create/", views.developer_create, name="developer_create"),
    path("<int:developer_id>/edit/", views.developer_edit, name="developer_edit"),
    path("<int:developer_id>/delete/", views.developer_delete, name="developer_delete"),
    path(
        "developer/<int:developer_id>/comment/",
        views.comment_create,
        name="comment_create",
    ),
    path("register/", views.register, name="register"),
]
