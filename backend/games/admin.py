from django.contrib import admin
from .models import Game

models_list = [Game]
admin.site.register(models_list)