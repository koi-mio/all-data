from django.shortcuts import render, get_object_or_404, redirect


def home(request):
    # return HttpResponse("Hello, world. You're at the polls index.")
    return render(request, "website/index.html")


def about(request):
    return render(request, "about.html")


def login(request):
    return render(request, "login.html")


def contact(request):
    return render(request, "contact.html")
