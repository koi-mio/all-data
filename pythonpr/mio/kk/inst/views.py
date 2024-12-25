"""
    The above functions define views for creating, editing, listing, and deleting instances of a model
    called Inst, along with user registration and authentication functionalities in a Django web
    application.    
    :param request: The `request` parameter in Django represents the HTTP request that was sent to the
    view. It contains information about the request, such as the user making the request, any data sent
    in the request, and other metadata. The view processes this request and returns an HTTP response
    :return: The code provided contains views for handling CRUD operations for a model called `Inst` in
    a Django project. The views include:
"""
    
from django.shortcuts import render, get_object_or_404, redirect
from .models import Inst
from .forms import InstForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login


def index(request):
    return render(request, "index.html")


@login_required
def inst_list(request):
    insts = Inst.objects.filter(user=request.user).order_by("-created_at")
    return render(request, "inst_list.html", {"insts": insts})


@login_required
def inst_create(request):
    if request.method == "POST":
        form = InstForm(request.POST, request.FILES)
        if form.is_valid():
            inst = form.save(commit=False)
            inst.user = request.user
            inst.save()
            return redirect("inst_list")
    else:
        form = InstForm()
        return render(request, "inst_form.html", {"form": form})


@login_required
def inst_edit(request, inst_id):
    inst = get_object_or_404(Inst, pk=inst_id, user=request.user)
    if request.method == "POST":
        form = InstForm(request.POST, request.FILES, instance=inst)
        if form.is_valid():
            inst = form.save(commit=False)
            inst.user = request.user
            inst.save()
            return redirect("inst_list")
    else:
        form = InstForm(instance=inst)
        return render(request, "inst_form.html", {"form": form})


@login_required
def inst_delete(request, inst_id):
    inst = get_object_or_404(Inst, pk=inst_id, user=request.user)
    if request.method == "POST":
        inst.delete()
        return redirect("inst_list")
    else:
        return render(request, "inst_confirm.html", {"inst": inst})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("inst_list")
    else:
        form = UserRegistrationForm()
        return render(request, "registration/register.html", {"form": form})
