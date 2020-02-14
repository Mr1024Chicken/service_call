import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Books} from './models/books';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  private url = "http://localhost:8080/BookService/jaxrs/books";
  constructor(private http : HttpClient) { }

  loadBook(): Observable<Books[]>{
    return this.http.get<Books[]>(this.url);
  }
  
  getBookByTitle(): Observable<Books[]>{
     return this.http.get<Books[]>(this.url,{
       params: {title : 'c'}
    
    })
  }

}
