import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockService} from '../stock.service';
import {Stock} from '../models/stock';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks: Stock[];
  stockFilter = "";
  
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loadStock();
  }
  loadStock(){
    this.stockService.getStock().subscribe(data => this.stocks = data);
  }

  filterStock(){
    this.stockService.getfilter(this.stockFilter).subscribe(data => this.stocks = data);
  }

}
