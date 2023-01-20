from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

# starting function


@api_view(['GET'])
def test(request):
    return Response("Server is Up and Running....!")
