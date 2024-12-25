from django.db import models
from django.utils import timezone

# Create your models here.

class projectvs(models.Model):
    PROJECT_TYPE_CHOICE = [
        ("nextjs", "Next-js"),
        ("react", "React"),
        ("vue", "Vue"),
        ("angular", "Angular"),
        ("django", "Django"),
        ("flask", "Flask"),
        ("laravel", "Laravel"),
        ("spring", "Spring"),
        ("nodejs", "Node.js"),
        ("express", "Express"),
        ("ruby", "Ruby"),
        ("rails", "Rails"),
    ]
    
    name = models.CharField(max_length=100)
    date_added = models.DateField(default=timezone.now)
    type= models.CharField(max_length=7, choices=PROJECT_TYPE_CHOICE)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/")
    url = models.URLField(blank=True)
    
    
    def __str__(self):
        return self.name
    