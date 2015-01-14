from django.conf.global_settings import DATABASES
from django.db import models
from pymongo import Connection
from djangotoolbox.fields import ListField
from django.db import models
from mongoengine import *
from landingPage.settings import DATABASES

connect(DATABASES)
con=Connection('localhost')
db=con['mydatabase']
from django.db import models
class images(models.Model):
    _id = models.CharField(max_length=10)
    url = models.URLField(max_length=200)

# Create your models here.

class cart(models.Model):
    _id = models.CharField(max_length=10)
    number = models.CharField(max_length=20)