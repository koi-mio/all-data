from django.urls import path
from . import views

urlpatterns = [
    path("", views.coffee_list, name="coffee_list"),
    path("coffee_list/", views.coffee_list, name="coffee_list"),
    path("create/", views.coffee_create, name="coffee_create"),
    path("<int:coffee_id>/edit/", views.coffee_edit, name="coffee_edit"),
    path("<int:coffee_id>/delete/", views.coffee_delete, name="coffee_delete"),
    path("register/", views.register, name="register"),
]
