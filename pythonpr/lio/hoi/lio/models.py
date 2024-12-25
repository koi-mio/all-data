from django.db import models
from django.contrib.auth.models import User


class Lio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField(max_length=240)
    photo = models.ImageField(upload_to='photos/', blank=True, null=True)    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    tweet = models.CharField(max_length=140, default="")
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    title = models.CharField(max_length=100)
    description = models.TextField()
    is_public = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.username} - {self.text[:10]}"
