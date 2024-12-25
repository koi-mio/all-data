from django.urls import path
from . import views


urlpatterns = [
    path("", views.js_list, name="js_list"),
    path("create/", views.js_create, name="js_create"),
    path("<int:js_id>/edit/", views.js_edit, name="js_edit"),
    path("<int:js_id>/delete/", views.js_delete, name="js_delete"),
    path("js/<int:js_id>/comment/", views.comment_create, name="comment_create"),
    path("register/", views.register, name="register"),
]
