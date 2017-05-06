from django.contrib import admin
from api.models import Product,ProductCategory,Customer,Cart,Branch,Event

# Register your models here.
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(Customer)
admin.site.register(Cart)
admin.site.register(Branch)
admin.site.register(Event)
