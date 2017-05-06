from django.shortcuts import render
from . import models
from api import serializers
from rest_framework import generics
# Create your views here.

class CategoryList(generics.ListCreateAPIView):
    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.CategorySerializers

class ProductList(generics.ListCreateAPIView):
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializers

class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializers

class CartList(generics.ListCreateAPIView):
    queryset = models.Cart.objects.all()
    serializer_class = serializers.CartSerializers

class EventList(generics.ListCreateAPIView):
    queryset =models.Event.objects.all()
    serializer_class = serializers.EventSerializers

class BranchList(generics.ListCreateAPIView):
    queryset =models.Branch.objects.all()
    serializer_class = serializers.BranchSerializers
