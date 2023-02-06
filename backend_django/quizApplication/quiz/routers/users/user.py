from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connections
from rest_framework.parsers import JSONParser
from quiz.serializers.quiz import quiz
import jwt


# Fetch all the Users

@api_view(['GET'])
def fetchUsers(request):
    try:
        cursor1 = connections['default'].cursor()
        sql = "SELECT * FROM quiz_user"
        with cursor1 as cursor:
            cursor.execute(sql)
            object = dictfetchall(cursor)
        return Response(object)
    except:
        return Response({"msg": "Something went wrong!"})


def dictfetchall(cursor):
    # "Return all rows from a cursor as a dict"
    columns = [col[0] for col in cursor.description]
    return [
        dict(zip(columns, row))
        for row in cursor.fetchall()
    ]
