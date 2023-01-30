from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from quiz.serializers import signin


@api_view(['POST'])
def signInViewSet(request):
    try:
        parsedData = JSONParser().parse(request)
        data_serializer = signin.signInSerializer(data=parsedData)
        if data_serializer.is_valid():
            sql = "SELECT * FROM users WHERE email = '{0}'".format(
                data_serializer._validated_data.get('email'))
            return Response("True")
        return Response({"msg": "Please Enter the Correct Email and Password!"})
    except:
        return Response({"msg": "Please enter Email and Password!"})
