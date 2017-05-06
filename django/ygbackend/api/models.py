from django.db import models

# Create your models here.

class ProductCategory(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length = 30)
    price = models.FloatField()
    discount = models.FloatField()
    period = models.DateField()
    picture = models.ImageField(upload_to = "static/images/products")
    category = models.ForeignKey(ProductCategory,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Customer(models.Model):
    email = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    address = models.TextField()

    def __str__(self):
        return self.email + " - " + self.name

class Cart(models.Model):
    date = models.DateField()
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    shoppingCarts = models.ManyToManyField(Product)

    def __str__(self):
        return "#" + str(self.id) + " - " +str(self.date) + " - " +self.customer.email

class Event(models.Model):
    name = models.CharField(max_length=30)
    startDate = models.DateField()
    endDate = models.DateField()
    description = models.TextField()
    picture = models.ImageField(upload_to="static/images/events")

    def __str__(self):
        return self.name

class Branch(models.Model):
    name = models.CharField(max_length=30)
    location = models.TextField()
    zipcode = models.IntegerField()
    description = models.TextField()
    phoneNumber = models.IntegerField()
    sosmed = models.CharField(max_length=30)
    vision = models.TextField()
    mission = models.TextField()
    products = models.ManyToManyField(Product)
    events = models.ManyToManyField(Event)

    def __str__(self):
        return self.name
