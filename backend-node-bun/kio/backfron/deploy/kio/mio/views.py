from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import Mio
from .forms import MioForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login
from .models import Comment
from .forms import CommentForm


def mio(request):
    return render(request, "index.html")


def mio_list(request):
    mios = Mio.objects.all().order_by("-created_at")
    return render(request, "mio_list.html", {"mios": mios})


@login_required
def mio_create(request):
    if request.method == "POST":
        form = MioForm(request.POST, request.FILES)
        if form.is_valid():
            mio = form.save(commit=False)
            mio.user = request.user
            mio.save()
            return redirect("mio_list")
    else:
        form = MioForm(request.POST or None)
        return render(request, "mio_form.html", {"form": form})


@login_required
def mio_edit(request, mio_id):
    mio = get_object_or_404(Mio, pk=mio_id, user=request.user)
    if request.method == "POST":
        form = MioForm(request.POST, request.FILES, instance=mio)
        if form.is_valid():
            mio = form.save(commit=False)
            mio.user = request.user
            mio.save()
            return redirect("mio_list")
    else:
        form = MioForm(instance=mio)
        return render(request, "mio_form.html", {"form": form})


@login_required
def mio_delete(request, mio_id):
    mio = get_object_or_404(Mio, pk=mio_id, user=request.user)
    if request.method == "POST":
        mio.delete()
        return redirect("mio_list")
    return render(request, "mio_confirm_delete.html", {"mio": mio})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("mio_list")
    else:
        form = UserRegistrationForm()
    return render(request, "registration/register.html", {"form": form})


@login_required
def comment_create(request, mio_id):
    mio = get_object_or_404(Mio, pk=mio_id)
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.mio = mio
            comment.user = request.user
            comment.save()
            return redirect("mio_detail", mio_id=mio.id)  # Redirect to the detail view of the Mio
    else:
        form = CommentForm()
    return render(request, "comment_form.html", {"form": form, "mio": mio})
