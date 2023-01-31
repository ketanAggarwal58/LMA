from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connections
from rest_framework.parsers import JSONParser
from quiz.serializers import signin
import jwt


@api_view(['POST'])
def signInViewSet(request):
    try:
        cursor1 = connections['default'].cursor()
        parsedData = JSONParser().parse(request)
        data_serializer = signin.signInSerializer(data=parsedData)
        if data_serializer.is_valid():
            with cursor1 as cursor:
                sql = "SELECT * FROM quiz_user WHERE email = '{0}'".format(
                    data_serializer._validated_data.get('email'))
                cursor.execute(sql)
                object = dictfetchall(cursor)
                if (data_serializer._validated_data.get('email') == object[0]['email'] and data_serializer._validated_data.get('password') == object[0]['password']):
                    encode = jwt.encode(
                        {'email': object[0]['email']}, 'MySecretKey', algorithm='HS256')
                    return Response({"Token": encode})
            return Response({"msg": "Please Enter the Correct Email and Password!"})
    except:
        return Response({"msg": "Please enter Email and Password!"})


def dictfetchall(cursor):
    # "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]
