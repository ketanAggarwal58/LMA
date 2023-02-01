from django.db import models

# Create your models here.


# User Model
class User(models.Model):
    firstName = models.CharField(max_length=256)
    lastName = models.CharField(max_length=256)
    email = models.CharField(max_length=256)
    phone = models.CharField(max_length=256)
    password = models.CharField(max_length=256)


class Quiz(models.Model):
    quizName = models.CharField(max_length=256)
    quizQuestion = models.CharField(max_length=256)
    quizAnswer1 = models.CharField(max_length=256)
    quizAnswer2 = models.CharField(max_length=256)
    quizAnswer3 = models.CharField(max_length=256)
    quizAnswer4 = models.CharField(max_length=256)
    correctAnswer = models.CharField(max_length=256)
    questionScore = models.CharField(max_length=256)


class quizData(models.Model):
    quizName = models.CharField(max_length=256)
    quizMaxSocre = models.CharField(max_length=256)
    quizCreater = models.CharField(max_length=256)
    quizSubject = models.CharField(max_length=100)


class quizSocre(models.Model):
    quizName = models.CharField(max_length=256)
    userEmail = models.CharField(max_length=256)
    quizScore = models.IntegerField()
    quizMaxScore = models.IntegerField()
