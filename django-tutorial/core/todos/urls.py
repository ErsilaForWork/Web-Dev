from django.urls import path
from . import views

urlpatterns = [
    path('greet/', views.hello_world, name='hello-world')
]