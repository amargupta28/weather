from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
import requests
from configparser import ConfigParser
import os
import json




#globally setting Config File
configFileLocation = os.path.dirname(os.path.abspath(__file__))
conffile = os.path.join(configFileLocation, 'config.txt')
configur = ConfigParser()
configur.read(conffile)
configur.sections()
key= str(configur.get('default','api_key'))
url=str(configur.get('default','url'))

# Create your views here.
class CurrentWeather(View):

    def get(self,req):
        city= req.GET.get("city")
        weatherData = requests.get(url+"/weather?appid="+key+"&q="+city)
        print(weatherData.json())
        response_data = weatherData.json()
        return HttpResponse(json.dumps(response_data), content_type="application/json")


class HistoricalWeather(View):

    def get(self,req):
        lat= req.GET.get("lat")
        lon= req.GET.get("lon")
        dt=req.GET.get("dt")
        historicalData = requests.get(url+"onecall/timemachine?lat="+lat+"&lon="+lon+"&dt="+dt+"&appid="+key)
        print(historicalData.json())
        response_data = historicalData.json()
        return HttpResponse(json.dumps(response_data), content_type="application/json")

#         https://api.openweathermap.org/data/2.5/onecall/timemachi
# ne?lat=51.5085&lon=-0.1257&dt=1654905600&appid=[API_KEY]
