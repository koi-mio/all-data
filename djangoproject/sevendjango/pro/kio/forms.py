from django import forms
from .models import Comment
from .models import Kio
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class KioForm(forms.ModelForm):
    class Meta:
        model = Kio
        fields = ["text", "photo"]


class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ["text"]
