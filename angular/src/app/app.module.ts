import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { EventComponent } from './component/event/event.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { CardviewComponent } from './component/cardview/cardview.component';
import {Now} from './now'
import {datePipe} from './datePipe';
import { CardviewEventComponent } from './component/cardview-event/cardview-event.component';
import { FooterComponent } from './component/footer/footer.component';

const appRoutes :Routes = [

  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'product', component: ProductComponent},
  {path:'event', component: EventComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    EventComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    CardviewComponent,
    datePipe,
    Now,
    CardviewEventComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
