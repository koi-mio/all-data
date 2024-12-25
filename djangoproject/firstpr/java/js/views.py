from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import Js
from .forms import JsForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def js(request):
    return render(request, "index.html")


def js_list(request):
    jss = Js.objects.all().order_by("-created_at")
    return render(request, "js_list.html", {"jss": jss})


@login_required
def js_create(request):
    if request.method == "POST":
        form = JsForm(request.POST, request.FILES)
        if form.is_valid():
            js = form.save(commit=False)
            js.user = request.user
            js.save()
            return redirect("js_list")
    else:
        form = JsForm(request.POST or None)
        return render(request, "js_form.html", {"form": form})


@login_required
def js_edit(request, js_id):
    js = get_object_or_404(Js, pk=js_id, user=request.user)
    if request.method == "POST":
        form = JsForm(request.POST, request.FILES, instance=js)
        if form.is_valid():
            js = form.save(commit=False)
            js.user = request.user
            js.save()
            return redirect("js_list")
    else:
        form = JsForm(instance=js)
        return render(request, "js_form.html", {"form": form})


@login_required
def js_delete(request, js_id):
    js = get_object_or_404(Js, pk=js_id, user=request.user)
    if request.method == "POST":
        js.delete()
        return redirect("js_list")
    return render(request, "js_confirm_delete.html", {"js": js})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("js_list")
    else:
        form = UserRegistrationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, js_id):
    js = get_object_or_404(Js, pk=js_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.js = js
            comment.user = request.user
            comment.save()
            return redirect("js_detail", js_id=js.id)
    else:
        form = CommentForm()
    return render(request, "comment_form.html", {"form": form, "js": js})
