from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(("The e-mail must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()

        return user

class Cliente(AbstractUser):
    nomeCompleto = models.CharField(max_length=255, blank=False)
    data_nascimento = models.DateField(blank=False)
    cpf = models.CharField(max_length=14, blank=False, unique=True)
    numero_telefone = models.CharField(max_length=20, blank=False, unique=True)
    email = models.EmailField(unique=True, blank=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["nomeCompleto", "username", 'cpf',  "data_nascimento", "numero_telefone", "password"]

class Planta(models.Model):
    nome = models.CharField(max_length=17, unique=True)
    imagem = models.ImageField()
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    origem = models.CharField(max_length=255)
    facilidade = models.CharField(max_length=255)
    bem_estar = models.CharField(max_length=255)
    texto_base = models.CharField(max_length=150)

class Blog(models.Model):
    titulo = models.CharField(max_length=80, unique=True)
    subtitulo = models.CharField(max_length=180)
    texto = models.TextField(unique=True)
