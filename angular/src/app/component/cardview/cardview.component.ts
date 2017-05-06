import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../../models/product';
import {ProductCategory} from '../../models/productcategory';

@Component({
  selector: 'app-cardview',
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.css']
})
export class CardviewComponent implements OnInit {

  @Input() product:Product;
  @Input() productCategory:ProductCategory;
  days = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

  constructor() { }

  ngOnInit() {

  }

  hitunghargadiscount(){
    return Math.round((1 - this.product.discount/100 )* this.product.price);
  }

  changeFormat(){
    let d = new Date(this.product.period);
    return d.getDate() + ' ' + this.days[d.getMonth().toString()] + ' ' + d.getFullYear();

  }

  hitunghargaasli(price){
    let x = price.toString();
    let p = '';
    for(var i=0;i<x.length;i++){
      if(i%3==0 && i>0){
        p =  x[x.length-i-1] + '.' + p ;
      }
      else{
        p = x[x.length-i-1] + p;
      }
    }
    return p;
  }

}
