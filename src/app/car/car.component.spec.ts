import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Cars} from '../models/cars';
import {of} from 'rxjs';
import { CarComponent } from './car.component';
import {CarServiceService} from '../car-service.service';

const mockCar: Cars[] = [
  {
    make: 'toyota',
    model: 'camry',
    price: 1000,
    doors: 4,
    year: 2020
  },
  {
    make: 'ford',
    model: 'f150',
    price: 10000,
    doors: 4,
    year: 2021
  },
  {
    make: 'honda',
    model: 'accord',
    price: 2000,
    doors: 4,
    year: 2022
  }
];

describe('CarComponent', () => {
  let component: CarComponent;
  let fixture: ComponentFixture<CarComponent>;

  beforeEach(async(() => {
    const carService = jasmine.createSpyObj('CarServiceService',['loadCar']);
    carService.loadCar.and.returnValue(of(mockCar));


    TestBed.configureTestingModule({
      declarations: [ CarComponent ],
      providers:[{provide: CarServiceService, useValue: carService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
