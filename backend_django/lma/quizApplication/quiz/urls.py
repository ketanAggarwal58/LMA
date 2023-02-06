from django.urls import path, include
from quiz import views
from quiz.routers.auth import signup, signin
from quiz.routers.quiz import quizQuestions
from quiz.routers.users import user

urlpatterns = [
    path('', views.testViewSet, name='test'),
    path('signup', signup.signUpViewSet, name='Sign Up'),
    path('signin', signin.signInViewSet, name='Sign In'),
    path('quizuser', user.fetchUsers, name='Sign In'),
    path('quizdata', quizQuestions.quizFetchQuizName, name='Quiz Name'),
    path('quizQuestion', quizQuestions.quizAddQuestions, name="Quiz Question Add")
]
