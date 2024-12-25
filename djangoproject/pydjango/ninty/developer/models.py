from django.db import models
from django.contrib.auth.models import User


class Developer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    text = models.TextField(max_length=240)
    photo = models.ImageField(upload_to="photos/", blank=True, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    developer = models.CharField(max_length=140)
    likes = models.IntegerField(default=0)
    dislike = models.IntegerField(default=0)
    retweet = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}  ----  {self.text[:10]}"


class Comment(models.Model):
    developer = models.ForeignKey(Developer, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} ::  {self.text[:20]}"