# from django.db import models
# from django.utils import timezone
# from django.contrib.auth.models import User


# class ChaiVariety(models.Model):
#     CHAI_TYPE_CHOICE = [
#         ("black", "Black"),
#         ("green", "Green"),
#         ("white", "White"),
#         ("oolong", "Oolong"),
#         ("puerh", "Puerh"),
#         ("matcha", "Matcha"),
#         ("herbal", "Herbal"),
#     ]
#     name = models.CharField(max_length=100)
#     date_added = models.DateTimeField(default=timezone.now)
#     type = models.CharField(max_length=7, choices=CHAI_TYPE_CHOICE)
#     price = models.IntegerField()
#     description = models.TextField()
#     image = models.ImageField(upload_to="chais/")

#     def __str__(self):
#         return self.name


# class ChaiReview(models.Model):
#     chai = models.ForeignKey(ChaiVariety, on_delete=models.CASCADE)
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     review = models.TextField()
#     date_added = models.DateTimeField(default=timezone.now)
#     rating = models.IntegerField()
#     comment = models.TextField()
#     image = models.ImageField(upload_to="reviews/", blank=True, null=True)

#     def __str__(self):
#         return (
#             f"{self.user.username}  review  for {self.chai.name}  and {self.chai.type}"
#         )


# class Store(models.Model):
#     name = models.CharField(max_length=100)
#     location = models.CharField(max_length=100)
#     city = models.CharField(max_length=100)
#     chaivarieties = models.ManyToManyField(ChaiVariety, related_name="stores")

#     def __str__(self):
#         return self.name


# class ChaiCertificate(models.Model):
#     chai = models.OneToOneField(
#         ChaiVariety, on_delete=models.CASCADE, related_name="certificate"
#     )
#     certificate_number = models.CharField(max_length=100)
#     issused_date = models.DateTimeField(default=timezone.now)
#     valid_utill = models.DateTimeField()

#     def __str__(self):
#         return f"Certificate for {self.name.chai}"


# class ChaiFrencency(models.Model):
#     chai = models.OneToOneField(
#         ChaiVariety, on_delete=models.CASCADE, related_name="frecency"
#     )
#     frecency = models.IntegerField()
#     person = models.ManyToManyField(ChaiCertificate, related_name="auth")

#     date_added = models.DateTimeField(default=timezone.now)

#     def __str__(self):
#         return f"Chai frecency for {self.chai.name}"


from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class ChaiVariety(models.Model):
    CHAI_TYPE_CHOICE = [
        ("black", "Black"),
        ("green", "Green"),
        ("white", "White"),
        ("oolong", "Oolong"),
        ("puerh", "Puerh"),
        ("matcha", "Matcha"),
        ("herbal", "Herbal"),
    ]
    name = models.CharField(max_length=100)
    date_added = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=7, choices=CHAI_TYPE_CHOICE)
    price = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to="chais/")

    def __str__(self):
        return self.name


class ChaiReview(models.Model):
    chai = models.ForeignKey(ChaiVariety, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.TextField()
    date_added = models.DateTimeField(default=timezone.now)
    rating = models.IntegerField()
    comment = models.TextField()
    image = models.ImageField(upload_to="reviews/", blank=True, null=True)

    def __str__(self):
        return (
            f"{self.user.username}  review  for {self.chai.name}  and {self.chai.type}"
        )


class Store(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    chaivarieties = models.ManyToManyField(ChaiVariety, related_name="stores")

    def __str__(self):
        return self.name


class ChaiCertificate(models.Model):
    chai = models.OneToOneField(
        ChaiVariety, on_delete=models.CASCADE, related_name="certificate"
    )
    certificate_number = models.CharField(max_length=100)
    issused_date = models.DateTimeField(default=timezone.now)
    valid_utill = models.DateTimeField()

    def __str__(self):
        return f"Certificate for {self.chai.name}"
