from django.urls import path
from . import views

urlpatterns = [path("", views.all_iop, name="all_iop")]
