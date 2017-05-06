import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private _CustomerService: CustomerService ) {

  }

  ngOnInit() {
    this._CustomerService.getAll().subscribe(p=> this.customers = p);
  }

}
