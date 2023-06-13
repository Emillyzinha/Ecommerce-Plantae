from django.contrib import admin
from . import models

@admin.register(models.Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ['nomeCompleto', 'username', 'data_nascimento', 'cpf', 'numero_telefone', 'email', 'password']
