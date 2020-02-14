import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cars} from './models/cars';
//import {Observable} from 'rxjs/Observable';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private url = "http://localhost:8080/CarService/jaxrs/cars";
  constructor(private http: HttpClient) { }

  loadCar(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.url);
  }

  getCarByPrice(): Observable<Cars[]>{
    return this.http.get<Cars[]>(this.url,{
      params: {filter: 'price'}
    })
  }
}
