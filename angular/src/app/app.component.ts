import { Component } from '@angular/core';
import {CustomerService} from './service/customer.service';
import {ProductCategoryService} from './service/productcategory.service';
import {ProductService} from './service/product.service';
import {EventService} from './service/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomerService,ProductCategoryService,ProductService,EventService]
})
export class AppComponent {
  title = 'app works!';
}
