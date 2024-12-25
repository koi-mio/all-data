from django.shortcuts import render

# Create your views here.


def all_nio(request):
    return render(request, "nio/all_nio.html")
