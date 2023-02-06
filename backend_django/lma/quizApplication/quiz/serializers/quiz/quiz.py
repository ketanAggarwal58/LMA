from rest_framework import serializers
from quiz import models


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Quiz
        fields = '__all__'
