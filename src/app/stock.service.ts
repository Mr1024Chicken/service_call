import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Stock} from './models/stock';
import {Observable,of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StockService {
 private url = "http://localhost:8080/StockService/jaxrs/stocks";
  constructor(private http: HttpClient) { }

  getStock(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.url);
  }
  getfilter(id: string):Observable<Stock[]>{
    return this.http.get<Stock[]>(this.url,{
      params: {filter: id}
    })
  }


}
