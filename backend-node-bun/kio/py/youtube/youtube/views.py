from django.shortcuts import render


def home(request):
    return render(request, "website/index.html")


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


def service(request):
    return render(request, "service.html")
