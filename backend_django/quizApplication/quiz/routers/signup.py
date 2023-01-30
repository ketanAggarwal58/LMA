from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from quiz.serializers import signup


@api_view(['GET', 'POST'])
def signUpViewSet(request):
    try:
        parsedData = JSONParser().parse(request)
        data_serializer = signup.UserSerializer(data=parsedData)
        if data_serializer.is_valid():
            sql = 'INSERT INTO User(firstName, lastName, email, phone, password) VALUES()'
            return Response({"msg": "Your Data Recieved Successfully!"})
        return Response({"msg": "Please fill all the data fields."})
    except:
        return Response({"msg": "Please Send the correct Data."})
