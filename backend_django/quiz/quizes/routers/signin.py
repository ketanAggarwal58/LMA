from django.db import connections
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from quizes.serializers import registration
from quizes.models import User
import jwt


@api_view(['POST'])
def userSignIn(request):
    parsedData = JSONParser().parse(request)
    data_serializer = registration.UserSerializers(data=parsedData)
    cursor1 = connections['default'].cursor()
    if data_serializer.is_valid():
        with cursor1 as cursor:
            cursor.execute("SELECT * FROM User WHERE email = '{0}'".format(
                data_serializer._validated_data.get('objID')))
            object = dictfetchall(cursor)
            if(data_serializer._validated_data.get('branch') == object['password']):
                return


def dictfetchall(cursor):
    # "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]
