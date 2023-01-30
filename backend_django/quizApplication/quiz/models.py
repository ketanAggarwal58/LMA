from django.db import models

# Create your models here.


# User Model
class User(models.Model):
    fristName = models.CharField(max_length=256)
    lastName = models.CharField(max_length=256)
    email = models.CharField(max_length=256)
    phone = models.IntegerField()
    password = models.CharField(max_length=256)
