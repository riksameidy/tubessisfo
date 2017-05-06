from rest_framework import serializers
from . import models

class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model = models.ProductCategory
        fields = "__all__"

class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = "__all__"
        ordering = ('period',)

class CustomerSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Customer
        fields = "__all__"

class CartSerializers(serializers.ModelSerializer):
    products = ProductSerializers(read_only=True,many=True)
    class Meta:
        model = models.Cart
        fields = "__all__"

class EventSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Event
        fields = "__all__"

class BranchSerializers(serializers.ModelSerializer):
    products = ProductSerializers(read_only=True,many=True)
    events = EventSerializers(read_only=True,many=True)
    class Meta:
        model = models.Branch
        fields = "__all__"
