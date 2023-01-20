from django.db import connections
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from quizes.serializers import registration
from quizes.models import User


@api_view(['POST'])
def userRegistration(request):
    parsedData = JSONParser().parse(request)
    data_serializer = registration.UserSerializers(data=parsedData)
    if data_serializer.is_valid():
        user = User(
            firstName=data_serializer._validated_data.get('firstName'),
            lastName=data_serializer._validated_data.get('lastName'),
            phoneNo=data_serializer._validated_data.get('phoneNo'),
            email=data_serializer._validated_data.get('email'),
            dob=data_serializer._validated_data.get('dob'),
            password=data_serializer._validated_data.get('password'))
        user.save()
        return JsonResponse({"msg": "Added Successfully"}, safe=False)
    return JsonResponse({"msg": "An Error Occurred"}, safe=False)
