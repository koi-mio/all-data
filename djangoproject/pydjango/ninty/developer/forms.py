from django import forms
from .models import Comment
from .models import Developer
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class DeveloperForm(forms.ModelForm):
    class Meta:
        model = Developer
        fields = ["text", "photo"]


class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ["text"]