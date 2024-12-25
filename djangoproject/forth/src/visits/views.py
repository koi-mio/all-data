from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import Visit
from .forms import VisitForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def visit(request):
    return render(request, "index.html")


def visit_list(request):
    visits = Visit.objects.all().order_by("-created_at")
    return render(request, "visit_list.html", {"visits": visits})


@login_required
def visit_create(request):
    if request.method == "POST":
        form = VisitForm(request.POST, request.FILES)
        if form.is_valid():
            visit = form.save(commit=False)
            visit.user = request.user
            visit.save()
            return redirect("visit_list")
    else:
        form = VisitForm(request.POST or None)
        return render(request, "visit_form.html", {"form": form})


@login_required
def visit_edit(request, visit_id):
    visit = get_object_or_404(Visit, pk=visit_id, user=request.user)
    if request.method == "POST":
        form = VisitForm(request.POST, request.FILES, instance=visit)
        if form.is_valid():
            visit = form.save(commit=False)
            visit.user = request.user
            visit.save()
            return redirect("visit_list")
    else:
        form = VisitForm(instance=visit)
        return render(request, "visit_form.html", {"form": form})


@login_required
def visit_delete(request, visit_id):
    visit = get_object_or_404(Visit, pk=visit_id, user=request.user)
    if request.method == "POST":
        visit.delete()
        return redirect("visit_list")
    return render(request, "visit_confirm_delete.html", {"visit": visit})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("visit_list")
    else:
        form = UserRegistrationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, visit_id):
    visit = get_object_or_404(Visit, pk=visit_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.visit = visit
            comment.user = request.user
            comment.save()
            return redirect("visit_detail", visit_id=visit.id)
    else:
        form = CommentForm()
    return render(request, "comment_form.html", {"form": form, "visit": visit})
