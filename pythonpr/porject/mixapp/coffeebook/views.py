from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from .models import CoffeeBook
from .forms import CoffeeForm, UserRegistrationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login


def coffeebook(request):
    return render(request, "index.html")


def coffee_list(request):
    coffee = CoffeeBook.objects.all().order_by("-created_at")
    return render(request, "coffee_list.html", {"coffee": coffee})


@login_required
def coffee_create(request):
    if request.method == "POST":
        form = CoffeeForm(request.POST, request.FILES)
        if form.is_valid():
            coffee = form.save(commit=False)
            coffee.user = request.user
            coffee.save()
            return redirect("coffee_list")
    else:
        form = CoffeeForm(request.POST or None)
        return render(request, "coffee_form.html", {"form": form})


@login_required
def coffee_edit(request, coffee_id):
    coffee = get_object_or_404(CoffeeBook, pk=coffee_id, user=request.user)
    if request.method == "POST":
        form = CoffeeForm(request.POST, request.FILES, instance=coffee)
        if form.is_valid():
            coffee = form.save(commit=False)
            coffee.user = request.user
            coffee.save()
            return redirect("coffee_list")
    else:
        form = CoffeeForm(instance=coffee)
        return render(request, "coffee_form.html", {"form": form})


@login_required
def coffee_delete(request, coffee_id):
    coffee = get_object_or_404(CoffeeBook, pk=coffee_id, user=request.user)
    if request.method == "POST":
        coffee.delete()
        return redirect("coffee_list")
    return render(request, "coffee_confirm_delete.html", {"coffee":coffee})


def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user = set_password(form.cleaned_data["password1"])
            user.save()
            login(request,user)
            return redirect("cofffee_list")
        
    else:
        form = UserRegistrationForm()
    return render(request, "registration/register.html", {"form": form})