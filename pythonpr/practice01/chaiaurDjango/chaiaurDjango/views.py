from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    return render(request, "website/index.html")


def about(request):
    return render(request, "about.html")


def login(request):
    return render(request, "login.html")


def contact(request):
    return render(request, "contact.html")
