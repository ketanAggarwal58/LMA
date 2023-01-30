from rest_framework import serializers
from quiz import models


class signInSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['email', 'password']
