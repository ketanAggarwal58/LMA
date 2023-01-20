from rest_framework import serializers
from quizes import models


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'
