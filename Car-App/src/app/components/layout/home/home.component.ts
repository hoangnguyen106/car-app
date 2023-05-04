import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cars: Car[] = []
  constructor(private api: CarService, private activateRoute: ActivatedRoute) {
        this.cars = this.api.getAllCar()
  }
}
