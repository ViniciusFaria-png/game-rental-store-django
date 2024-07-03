from django.db import models
from django.utils import timezone

# Create your models here.

class Game(models.Model):
    gameId = models.AutoField(primary_key=True)
    GameName = models.CharField(max_length=100)
    Description = models.TextField(default="No description provided")
    ReleaseDate = models.DateField(default=timezone.now)
    Genre = models.CharField(max_length=50, default="No Genre provided")
    RentPrice = models.DecimalField(max_digits=6, decimal_places=2)
    IsFree = models.BooleanField(default=True)
    