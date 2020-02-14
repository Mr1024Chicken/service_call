import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { BookComponent } from './book/book.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {StockComponent} from './stock/stock.component';

const routes: Routes = [
  {
    path: 'WelcomeView',
    component: WelcomeComponent
  },
  {
    path: 'carView',
    component: CarComponent
  },
  {
    path: 'bookView',
    component: BookComponent
  },
  {
    path: 'stockView',
    component: StockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
