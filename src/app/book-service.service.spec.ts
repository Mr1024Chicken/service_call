import { TestBed,inject,fakeAsync,tick } from '@angular/core/testing';

import { BookServiceService } from './book-service.service';
import {Books} from './models/books';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';



let mockBook: Books[] = [
  {
    author:"king",
    title: "james",
    cover: "ugly",
    bookId: 1
  },
  {
    author:"loki",
    title: "kino",
    cover: "live",
    bookId: 2
  },
  {
    author:"ham",
    title: "egg",
    cover: "cheese",
    bookId: 3
  }
];
describe('BookServiceService', () => {
  let httpTestingController: HttpTestingController;
  let serviceUrl:'http://localhost:8080/BookService/jaxrs/books';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
    
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: BookServiceService = TestBed.get(BookServiceService);
    expect(service).toBeTruthy();
  });

  it('should return books', inject([BookServiceService], fakeAsync((service : BookServiceService) => {
    let books: Books[];
    service.loadBook().subscribe(data => books = data);
    const req = httpTestingController.expectOne("http://localhost:8080/BookService/jaxrs/books");
    expect(req.request.method).toEqual('GET');
    req.flush(mockBook);
    httpTestingController.verify();
    console.log();
    tick();
    expect(books).toBeTruthy();
    expect(books[1].title).toBe(mockBook[1].title);
  })));

});
