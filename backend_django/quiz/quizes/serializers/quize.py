from rest_framework import serializers
from quizes import models


class QuizeSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Quizes
        fields = '__all__'
