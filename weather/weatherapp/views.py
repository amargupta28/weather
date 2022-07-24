from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
import requests
from configparser import ConfigParser
import os



#globally setting Config File
configFileLocation = os.path.dirname(os.path.abspath(__file__))
conffile = os.path.join(configFileLocation, 'config.txt')
configur = ConfigParser()
configur.read(conffile)
configur.sections()
key= configur.get('default','api_key')
url=configur.get('default','url')


# Create your views here.
class CurrentWeather(View):

    def get(self,req):
        print(key)
        return HttpResponse("Thank you!!")


class HistoricalWeather(View):

    def get(self,req):
        return HttpResponse("Thank you!!")
