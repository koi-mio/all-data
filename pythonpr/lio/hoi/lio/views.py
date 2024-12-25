from django.shortcuts import render, get_object_or_404, redirect
from .models import Lio
from .forms import LioForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login


def index(request):
    return render(request, "index.html")


@login_required
def lio_list(request):
    lios = Lio.objects.filter(user=request.user).order_by("-created_at")
    return render(request, "lio_list.html", {"lios": lios})


@login_required
def lio_create(request):
    if request.method == "POST":
        form = LioForm(request.POST, request.FILES)
        if form.is_valid():
            lio = form.save(commit=False)
            lio.user = request.user
            lio.save()
            return redirect("lio_list")
    else:
        form = LioForm()
        return render(request, "lio_form.html", {"form": form})


@login_required
def lio_edit(request, lio_id):
    lio = get_object_or_404(Lio, pk=lio_id, user=request.user)
    if request.method == "POST":
        form = LioForm(request.POST, request.FILES, instance=lio)
        if form.is_valid():
            lio = form.save(commit=False)
            lio.user = request.user
            lio.save()
            return redirect("lio_list")
    else:
        form = LioForm(instance=lio)
        return render(request, "lio_form.html", {"form": form})


@login_required
def lio_delete(request, lio_id):
    lio = get_object_or_404(Lio, pk=lio_id, user=request.user)
    if request.method == "POST":
        lio.delete()
        return redirect("lio_list")
    else:
        return render(request, "lio_confirm.html", {"lio": lio})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("lio_list")

    else:
        form = UserRegistrationForm()
        return render(request, "registration/register.html", {"form": form})
