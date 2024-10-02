import { Component, input, Input } from '@angular/core';
import { CarLocation } from '../car-location';

@Component({
  selector: 'app-car-location',
  standalone: true,
  imports: [],
  templateUrl: './car-location.component.html',
  styleUrl: './car-location.component.css'
})
export class CarLocationComponent {
  @Input() carLocation!: CarLocation;
}
