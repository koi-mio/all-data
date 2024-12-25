from django.shortcuts import render

# Create your views here.


def all_iop(request):
    return render(request, "iop/all_iop.html")
