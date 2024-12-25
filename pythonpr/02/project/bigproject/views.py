from django.shortcuts import render, get_list_or_404
from .models import projectvs

# Create your views here.


def all_bigproject(request):
    projects = projectvs.objects.all()
    return render(request, "bigproject/all_bigproject.html", {"projects": projects})


def project(request, project_id):
    projects = get_list_or_404(projectvs, pk=project_id)
    return render(request, "bigproject/project.html", {"projects": projects})
