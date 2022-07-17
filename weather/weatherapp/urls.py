from django.contrib import admin
from django.urls import path
from weatherapp import views


urlpatterns = [
    path('current/',views.CurrentWeather.as_view()),
    path('historical/',views.HistoricalWeather.as_view())

]