from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import Developer
from .forms import DeveloperForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def developer(request):
    return render(request, "index.html")


def developer_list(request):
    developers = Developer.objects.all().order_by("-created_at")
    return render(request, "developer_list.html", {"developers": developers})


@login_required
def developer_create(request):
    if request.method == "POST":
        form = DeveloperForm(request.POST, request.FILES)
        if form.is_valid():
            developer = form.save(commit=False)
            developer.user = request.user
            developer.save()
            return redirect("developer_list")
    else:
        form = DeveloperForm(request.POST or None)
        return render(request, "developer_form.html", {"form": form})


@login_required
def developer_edit(request, developer_id):
    developer = get_object_or_404(Developer, pk=developer_id, user=request.user)
    if request.method == "POST":
        form = DeveloperForm(request.POST, request.FILES, instance=developer)
        if form.is_valid():
            developer = form.save(commit=False)
            developer.user = request.user
            developer.save()
            return redirect("developer_list")
    else:
        form = DeveloperForm(instance=developer)
        return render(request, "developer_form.html", {"form": form})


@login_required
def developer_delete(request, developer_id):
    developer = get_object_or_404(Developer, pk=developer_id, user=request.user)
    if request.method == "POST":
        developer.delete()
        return redirect("developer_list")
    return render(request, "developer_confirm_delete.html", {"developer": developer})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("developer_list")
    else:
        form = UserRegistrationForm()
        return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, developer_id):
    developer = get_object_or_404(Developer, pk=developer_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.developer = developer
            comment.user = request.user
            comment.save()
            return redirect("developer_detail", developer_id=developer_id)
    else:
        form = CommentForm()
        return render(
            request, "comment_form.html", {"form": form, "developer": developer}
        )
