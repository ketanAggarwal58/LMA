from rest_framework import serializers
from quizes import models


class QuestionSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.QuizeQuestions
        fields = '__all__'
