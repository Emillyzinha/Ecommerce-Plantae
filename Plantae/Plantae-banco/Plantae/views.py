from django.shortcuts import render
from .models import *
from .serializes import *

from rest_framework import viewsets
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework.permissions import IsAuthenticated

def dados_usuario(request):
    token = request.META.get('HTTP_AUTHORIZATION', '').split(' ')[1]
    dados = AccessToken(token)
    usuario = dados['user_id']
    return usuario

class ClienteCRUD(viewsets.ModelViewSet):
    queryset= Cliente.objects.all()
    serializer_class = ClienteSerializer
    permission_classes = (IsAuthenticated, )

class PlantasCRUD(viewsets.ModelViewSet):
    queryset= Planta.objects.all()
    serializer_class = PlantaSerializer
    # permission_classes = (IsAuthenticated, )

class BlogCRUD(viewsets.ModelViewSet):
    queryset= Blog.objects.all()
    serializer_class = BlogSerializer
    # permission_classes = (IsAuthenticated, )
