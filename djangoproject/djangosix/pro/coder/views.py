from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import Coder
from .forms import CoderForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def coder(request):
    return render(request, "index.html")


def coder_list(request):
    coders = Coder.objects.all().order_by("-created_at")
    return render(request, "coder_list.html", {"coders": coders})


@login_required
def coder_create(request):
    if request.method == "POST":
        form = CoderForm(request.POST, request.FILES)
        if form.is_valid():
            coder = form.save(commit=False)
            coder.user = request.user
            coder.save()
            return redirect("coder_list")
    else:
        form = CoderForm(request.POST or None)
        return render(request, "coder_form.html", {"form": form})


@login_required
def coder_edit(request, coder_id):
    coder = get_object_or_404(Coder, pk=coder_id, user=request.user)
    if request.method == "POST":
        form = CoderForm(request.POST, request.FILES, instance=coder)
        if form.is_valid():
            coder = form.save(commit=False)
            coder.user = request.user
            coder.save()
            return redirect("coder_list")
    else:
        form = CoderForm(instance=coder)
        return render(request, "coder_form.html", {"form": form})


@login_required
def coder_delete(request, coder_id):
    coder = get_object_or_404(Coder, pk=coder_id, user=request.user)
    if request.method == "POST":
        coder.delete()
        return redirect("coder_list")
    return render(request, "coder_confirm_delete.html", {"coder": coder})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("coder_list")
    else:
        form = UserRegistrationForm()
        return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, coder_id):
    coder = get_object_or_404(Coder, pk=coder_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.coder = coder
            comment.user = request.user
            comment.save()
            return redirect("coder_detail", coder_id=coder_id)
    else:
        form = CommentForm()
        return render(request, "comment_form.html", {"form": form, "coder": coder})
