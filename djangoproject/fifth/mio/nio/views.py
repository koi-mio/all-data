from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import Nio
from .forms import NioForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def nio(request):
    return render(request, "index.html")


def nio_list(request):
    nios = Nio.objects.all().order_by("-created_at")
    return render(request, "nio_list.html", {"nios": nios})


@login_required
def nio_create(request):
    if request.method == "POST":
        form = NioForm(request.POST, request.FILES)
        if form.is_valid():
            nio = form.save(commit=False)
            nio.user = request.user

            nio.save()
            return redirect("nio_list")
    else:
        form = NioForm(request.POST or None)
        return render(request, "nio_form.html", {"form": form})


@login_required
def nio_edit(request, nio_id):
    nio = get_object_or_404(Nio, pk=nio_id, user=request.user)
    if request.method == "POST":
        form = NioForm(request.POST, request.FILES, instance=nio)
        if form.is_valid():
            nio = form.save(commit=False)
            nio.user = request.user
            nio.save()
            return redirect("nio_list")
    else:
        form = NioForm(instance=nio)

        return render(request, "nio_form.html", {"form": form})


@login_required
def nio_delete(request, nio_id):
    nio = get_object_or_404(Nio, pk=nio_id, user=request.user)
    if request.method == "POST":
        nio.delete()
        return redirect("nio_list")
    return render(request, "nio_confirm_delete.html", {"nio": nio})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("nio_list")
    else:
        form = UserRegistrationForm()
        return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, nio_id):
    nio = get_object_or_404(Nio, pk=nio_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.nio = nio
            comment.user = request.user
            comment.save()
            return redirect("nio_detail", nio_id=nio_id)
    else:
        form = CommentForm()
        return render(request, "comment_form.html", {"form": form, "nio": nio})
