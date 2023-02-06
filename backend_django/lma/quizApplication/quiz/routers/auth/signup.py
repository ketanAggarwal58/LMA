from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from quiz.serializers.auth import signup
from django.db import connections


@api_view(['POST'])
def signUpViewSet(request):
    try:
        cursor1 = connections['default'].cursor()
        parsedData = JSONParser().parse(request)
        data_serializer = signup.UserSerializer(data=parsedData)
        if data_serializer.is_valid():
            with cursor1 as cursor:
                sql = "INSERT INTO quiz_user(firstName, lastName, email, phone, password) VALUES('{0}', '{1}', '{2}', '{3}', '{4}')".format(
                    data_serializer._validated_data.get('firstName'), data_serializer._validated_data.get('lastName'), data_serializer._validated_data.get('email'), data_serializer._validated_data.get('phone'), data_serializer._validated_data.get('password'))
                cursor.execute(sql)
            return Response({"msg": "Your Data Recieved Successfully!"})
        return Response({"msg": "Please fill all the data fields."})
    except:
        return Response({"msg": "Please Send the correct Data."})
