from django.contrib import admin
from django.urls import path
from tasks.views import cep, home

urlpatterns = [
    path('', home, name="home"),
    path('cep/', cep, name="cep")
]
