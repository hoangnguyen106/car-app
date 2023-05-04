import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { samples_car } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getAllCar(): Car[] {
    return samples_car
  }
}
