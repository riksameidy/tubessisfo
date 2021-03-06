# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-01 09:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('price', models.FloatField()),
                ('discount', models.FloatField()),
                ('period', models.DateField()),
                ('picture', models.ImageField(upload_to='static/images/products')),
            ],
        ),
    ]
