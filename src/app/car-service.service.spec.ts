import { TestBed,inject,fakeAsync,tick } from '@angular/core/testing';

import { CarServiceService } from './car-service.service';
import {Cars} from './models/cars';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';


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

describe('CarServiceService', () => {
  
  let httpTestingController: HttpTestingController;
  let serviceUrl: "http://localhost:8080/CarService/jaxrs/cars";

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: CarServiceService = TestBed.get(CarServiceService);
    expect(service).toBeTruthy();
  });

  it('should return cars', inject([CarServiceService], fakeAsync((service: CarServiceService) => {
    let cars: Cars[];
    service.loadCar().subscribe(data => cars = data);
    const req = httpTestingController.expectOne("http://localhost:8080/CarService/jaxrs/cars");
    expect(req.request.method).toEqual('GET');
    req.flush(mockCar);
    httpTestingController.verify();
    tick();
    expect(cars).toBeTruthy();
    expect(cars[0].make).toBe(mockCar[0].make);
  })));
});
