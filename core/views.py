from django.shortcuts import render

# Create your views here.
def home_page(request):
    return render(request, 'mainSite/homePage.html')

def buy_page(request):
    return render(request, 'mainSite/buyPage.html')