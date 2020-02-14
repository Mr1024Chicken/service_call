import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import {of} from 'rxjs';
import {Books} from '../models/books';
import {BookServiceService} from '../book-service.service';

const mockBook: Books[] = [
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

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
const bookService = jasmine.createSpyObj('BookServiceService',['loadBook']);
bookService.loadBook.and.returnValue(of(mockBook));

    TestBed.configureTestingModule({
      declarations: [ BookComponent ],
      providers: [{provide: BookServiceService, useValue: bookService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
