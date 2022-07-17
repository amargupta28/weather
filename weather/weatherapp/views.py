from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View


# Create your views here.
class CurrentWeather(View):

    def get(self,req):
        return HttpResponse("Thank you!!")


class HistoricalWeather(View):

    def get(self,req):
        return HttpResponse("Thank you!!")
