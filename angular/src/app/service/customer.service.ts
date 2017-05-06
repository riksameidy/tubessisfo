import {Customer} from '../models/customer';
import {Injectable} from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CustomerService{

  private urlString:string = 'http://localhost:8000/api/customer/';

  constructor(private http:Http){

  }

   getAll(): Observable<Customer[]>{
    let customer$ = this.http
      .get(`${this.urlString}`, {headers: this.getHeaders()} )
      .map(mapCustomer);
      return customer$;
   }

   private getHeaders(){
    let headers = new Headers();
    headers.append('Accept','application/json');
    return headers;
   }

}

function mapCustomer(response:Response):Customer[]{
    console.log(response.json());
    return response.json().map(toCustomer)
}

function toCustomer(r:any):Customer{
  let customer = <Customer>({
    id: r.id,
    email: r.email,
    password: r.password,
    name: r.name,
    address: r.address,
  });
  console.log('parsed customer',customer);
  return customer;

}
