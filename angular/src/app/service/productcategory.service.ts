import {ProductCategory} from '../models/productcategory';
import {Injectable} from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProductCategoryService{

  private urlString:string = 'http://localhost:8000/api/productcategory/';

  constructor(private http:Http){

  }

   getAll(): Observable<ProductCategory[]>{
    let productcategory$ = this.http
      .get(`${this.urlString}`, {headers: this.getHeaders()} )
      .map(mapProductCategory);
      return productcategory$;
   }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return headers;
   }

}

function mapProductCategory(response:Response):ProductCategory[]{
    console.log(response.json());
    return response.json().map(toProductCategory)
}

function toProductCategory(r:any):ProductCategory{
  let productcategory = <ProductCategory>({
    id: r.id,
    name: r.name,
  });
  console.log('parsed product category',productcategory);
  return productcategory;

}
