from rest_framework import serializers
from .models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['nomeCompleto', 'username', 'data_nascimento', 'cpf', 'numero_telefone', 'email', 'password']

class PlantaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planta
        fields = ['nome', 'imagem', 'valor', 'origem', 'facilidade', 'bem_estar', 'texto_base']
        
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['titulo', 'subtitulo', 'texto']
