"""ygbackend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from api import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/productcategory/',views.CategoryList.as_view()),
    url(r'^api/product/',views.ProductList.as_view()),
    url(r'^api/customer/',views.CustomerList.as_view()),
    url(r'^api/cart/',views.CartList.as_view()),
    url(r'^api/event/',views.EventList.as_view()),
    url(r'^api/branch/',views.BranchList.as_view()),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
