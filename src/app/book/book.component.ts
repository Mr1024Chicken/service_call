import { Component, OnInit } from '@angular/core';
import { Books} from '../models/books';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Books[];

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    this.bookService.loadBook().subscribe(data => this.books = data)
  }
  getByTitle(){
    this.bookService.getBookByTitle().subscribe(data => this.books = data)
  }

}
