from django.shortcuts import get_object_or_404, redirect, render
from .forms import InstForm, UserRegistrationForm
from .models import Inst
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login


def inst(request):
    return render(request, "index.html")


def inst_list(request):
    insts = Inst.objects.all().order_by("-created_at")
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
        form = InstForm(request.POST or None)
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
    return render(request, "inst_confirm_delete.html", {"inst": inst})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password1"])
            user.save()
            login(request, user)
            return redirect("tweet_list")
    else:
        form = UserRegistrationForm()
    return render(request, "registration/register.html", {"form": form})
