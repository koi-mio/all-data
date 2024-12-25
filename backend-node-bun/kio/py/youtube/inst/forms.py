from django import forms
from .models import Inst
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class InstForm(forms.ModelForm):
    class Meta:
        model = Inst
        fields = ["text", "photo"]


class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")
