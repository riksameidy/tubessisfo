# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-01 11:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_cart_shoppingcarts'),
    ]

    operations = [
        migrations.CreateModel(
            name='Branch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('location', models.TextField()),
                ('zipcode', models.IntegerField()),
                ('description', models.TextField()),
                ('phoneNumber', models.IntegerField()),
                ('sosmed', models.CharField(max_length=30)),
                ('vision', models.TextField()),
                ('mission', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('startDate', models.DateField()),
                ('endDate', models.DateField()),
                ('description', models.TextField()),
                ('picture', models.ImageField(upload_to='static/images/events')),
            ],
        ),
        migrations.AddField(
            model_name='branch',
            name='events',
            field=models.ManyToManyField(to='api.Event'),
        ),
        migrations.AddField(
            model_name='branch',
            name='products',
            field=models.ManyToManyField(to='api.Product'),
        ),
    ]
