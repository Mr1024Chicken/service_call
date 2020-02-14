import { Component, OnInit } from '@angular/core';
import { Cars } from '../models/cars';
import {CarServiceService} from '../car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Cars[];

  constructor(private carService: CarServiceService) { }

  ngOnInit(){
    this.getCar();
  }
  getCar(){
    this.carService.loadCar().subscribe(data => this.cars = data)
  }

  getByPrice(){
    this.carService.getCarByPrice().subscribe(data => this.cars = data)
  }
}
