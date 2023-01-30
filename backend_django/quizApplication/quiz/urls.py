from django.urls import path, include
from quiz import views
from quiz.routers import signup, signin

urlpatterns = [
    path('', views.testViewSet, name='test'),
    path('signup', signup.signUpViewSet, name='Sign Up'),
    path('signin', signin.signInViewSet, name='Sign In')
]
