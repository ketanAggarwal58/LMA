# Generated by Django 3.2.8 on 2023-01-31 16:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0002_rename_fristname_user_firstname'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='questionScore',
            field=models.CharField(max_length=256),
        ),
    ]