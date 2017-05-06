import {Product} from '../models/product';
import {Injectable} from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ProductService{

  private urlString:string = 'http://localhost:8000/api/product/';

  constructor(private http:Http){

  }

   getAll(): Observable<Product[]>{
    let product$ = this.http
      .get(`${this.urlString}`, {headers: this.getHeaders()} )
      .map(mapProduct);

      return product$;
   }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return headers;
   }

}

function mapProduct(response:Response):Product[]{
    console.log(response.json());
    return response.json().map(toProduct)
}

function toProduct(r:any):Product{
  let product = <Product>({
  id: r.id,
  name :r.name,
  price :r.price,
  discount : r.discount,
  period : r.period,
  picture : r.picture,
  category : r.category
  });
  console.log('parsed product ',product);
  let per = new Date(product.period);
  let d = new Date();
  product.expired = per > d;
  return product;


}
