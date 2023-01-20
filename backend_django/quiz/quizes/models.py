from django.db import models


class User(models.Model):
    firstName = models.CharField(max_length=256)
    lastName = models.CharField(max_length=256)
    phoneNo = models.IntegerField()
    email = models.CharField(max_length=256)
    dob = models.DateField()
    password = models.CharField(max_length=256)


class Quizes(models.Model):
    quizeID = models.IntegerField()
    quizeName = models.CharField(max_length=256)
    quizeCreator = models.CharField(max_length=256)


class QuizeQuestions(models.Model):
    quizeID = models.IntegerField()
    question = models.CharField(max_length=256)
    quizeOption1 = models.CharField(max_length=256)
    quizeOption2 = models.CharField(max_length=256)
    quizeOption3 = models.CharField(max_length=256)
    quizeOption4 = models.CharField(max_length=256)
    quizeAnswer = models.CharField(max_length=256)
