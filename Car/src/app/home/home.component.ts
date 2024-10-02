import { Component } from '@angular/core';
import { CarLocationComponent } from '../car-location/car-location.component';
import { CarLocation } from '../car-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  carLocation: CarLocation = {
    id: 9999,
    name: 'Tesla',
    city: 'Test city',
    state: 'ST',
    photo: `https://lokan.jp/wp-content/uploads/2019/03/Tesla-Model-Y-Blue-1280x720@2x.jpg`,
    availableUnits: 99,
    range: 450,
    efficiency: 11,
  };

}
