# Generated by Django 3.2.8 on 2023-02-04 04:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_alter_quiz_questionscore'),
    ]

    operations = [
        migrations.CreateModel(
            name='quizData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quizName', models.CharField(max_length=256)),
                ('quizMaxSocre', models.CharField(max_length=256)),
                ('quizCreater', models.CharField(max_length=256)),
                ('quizSubject', models.CharField(max_length=100)),
            ],
        ),
    ]
