from django.shortcuts import render
import requests
from django.http import HttpResponse


def home(request):

    return render(request, 'html/home.html')

def cep(request):
    numcep = request.POST.get('cep')
    cep = requests.get(f"https://viacep.com.br/ws/{numcep}/json/").json()
    print(cep)
    
    return render(request, 'html/cep.html', cep)
