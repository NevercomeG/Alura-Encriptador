from urllib import response
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from rest_framework import response


# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

def Encryptor(request):
    sample_string = "This is a sample string"
    char_to_replace = {'a': 'e',
                    'i': 'o',
                    'u': 'Z'}
    for key, value in char_to_replace.items():
        sample_string = sample_string.replace(key, value)

    return response(sample_string)