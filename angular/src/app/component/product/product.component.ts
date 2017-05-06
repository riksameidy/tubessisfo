import { Component, OnInit } from '@angular/core';
import {ProductCategory} from '../../models/productcategory';
import {ProductCategoryService} from '../../service/productcategory.service';
import {Product} from '../../models/product';
import {ProductService} from '../../service/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  productCategories : ProductCategory[] = [];
  products : Product[] = [];


  constructor(private _ProductCategoryService: ProductCategoryService, private _ProductService:ProductService) { }

  ngOnInit() {
    this._ProductCategoryService.getAll().subscribe(p=> this.productCategories = p);
    this._ProductService.getAll().subscribe(p=> this.products = p);

  }

  index(categoryid){
    let idx = -1;
    for(var i=0;i<this.productCategories.length;i++){
      if(categoryid==this.productCategories[i].id){
        idx = i;
      }
    }
    if(idx!=-1)
    return this.productCategories[idx].name;
  }


}
