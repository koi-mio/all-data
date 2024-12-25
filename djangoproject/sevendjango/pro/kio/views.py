from django.shortcuts import render, redirect
from django.shortcuts import get_object_or_404
from .models import Kio
from .forms import KioForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def kio(request):
    return render(request, "index.html")


def kio_list(request):
    kios = Kio.objects.all().order_by("-created_at")
    return render(request, "kio_list.html", {"kios": kios})


@login_required
def kio_create(request):
    if request.method == "POST":
        form = KioForm(request.POST, request.FILES)
        if form.is_valid():
            kio = form.save(commit=False)
            kio.user = request.user
            kio.save()
            return redirect("kio_list")
        return render(request, "kio_form.html", {"form": form})
    else:
        form = KioForm()
        #       form = KioForm(request.POST or None)
        return render(request, "kio_form.html", {"form": form})


@login_required
def kio_edit(request, kio_id):
    kio = get_object_or_404(Kio, pk=kio_id, user=request.user)
    if request.method == "POST":
        form = KioForm(request.POST, request.FILES, instance=kio)
        if form.is_valid():
            kio = form.save(commit=False)
            kio.user = request.user
            kio.save()
            return redirect("kio_list")
    else:
        form = KioForm(instance=kio)
        return render(request, "kio_form.html", {"form": form})


@login_required
def kio_delete(request, kio_id):
    kio = get_object_or_404(Kio, pk=kio_id, user=request.user)
    if request.method == "POST":
        kio.delete()
        return redirect("kio_list")
    return render(request, "kio_confirm_delete.html", {"kio": kio})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("kio_list")
    else:
        form = UserRegistrationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, kio_id):
    kio = get_object_or_404(Kio, pk=kio_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.kio = kio
            comment.user = request.user
            comment.save()
            return redirect("kio_detail", kio_id=kio.id)
    else:
        form = CommentForm()
    return render(request, "comment_form.html", {"form": form, "kio": kio})
