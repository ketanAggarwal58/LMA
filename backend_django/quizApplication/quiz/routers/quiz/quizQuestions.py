from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db import connections
from rest_framework.parsers import JSONParser
from quiz.serializers.quiz import quiz
import jwt


@api_view(['POST'])
def quizAddQuestions(request):
    try:
        cursor1 = connections['default'].cursor()
        parsedData = JSONParser().parse(request)
        data_serializer = quiz.QuizSerializer(data=parsedData)
        if data_serializer.is_valid():
            with cursor1 as cursor:
                sql = "INSERT INTO quiz_quiz(quizName, quizQuestion, quizAnswer1, quizAnswer2, quizAnswer3, quizAnswer4, correctAnswer, questionScore) VALUES('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}', '{7}')".format(
                    data_serializer._validated_data.get('quizName'), data_serializer._validated_data.get('quizQuestion'), data_serializer._validated_data.get('quizAnswer1'), data_serializer._validated_data.get('quizAnswer2'), data_serializer._validated_data.get('quizAnswer3'), data_serializer._validated_data.get('quizAnswer4'), data_serializer._validated_data.get('correctAnswer'), data_serializer._validated_data.get('questionScore'))
                cursor.execute(sql)
            return Response({"msg": "Your Data Recieved Successfully!"})
        return Response({"msg": "Please fill all the data fields."})
    except:
        return Response({"msg": "Something Went Wrong!"})


# this function is an internal function which helps to calculate the cumilative
# score of an Particular quiz when an new question is added.
def quizScoreCalculation(quizName):
    try:
        cursor1 = connections['default'].cursor()
        score = 0
        with cursor1 as cursor:
            sql = "SELECT * FROM quiz_quiz where quizName = '{0}'".format(
                quizName)
            cursor.execute(sql)
            object = dictfetchall(cursor)
            for data in object:
                score += int(data['questionScore'])
            sql1 = "UPDATE"
        return
    except:
        return Response({"msg": "Something went wrong while adding new question"})

# For Admin User


def quizFetchQuizName(request):
    try:
        cursor1 = connections['default'].cursor()
        sql = "SELECT quiz_quiz.quizName, quiz_quizscore.quizMaxScore FROM quiz_quiz INNER JOIN quiz_quiz ON quiz_quiz.quizName=quiz_quizscore.quizName"
        with cursor1 as cursor:
            cursor.execute(sql)
            object = dictfetchall(cursor)
            return Response({"Quiz Data": object})
    except:
        return Response({"msg": "Something went wrong!"})


# For Particular User
@api_view(['GET'])
def quizFetchQuestions(request):
    try:
        parsedData = JSONParser().parse(request)
        data_serializer = quiz.QuizSerializer(data=parsedData)
        if data_serializer.is_valid():
            cursor1 = connections['default'].cursor()
            sql = "SELECT * FROM quiz_quiz Where quizName = {0}".format(
                data_serializer._validated_data.get('quizName'))
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


quizScoreCalculation("Quiz 1")
