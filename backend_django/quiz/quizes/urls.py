from django.urls import path
from quizes import views

urlpatterns = [
    path('', views.test, name="test"),
]
