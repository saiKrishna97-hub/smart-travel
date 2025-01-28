import { Component } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent {
  cities: any;

  constructor(private apiService: APIService) {}

  ngOnInIt() {
    this.getCities();
  }

  getCities = () => {
    fetch('./cities.json').then((response) => {
      this.cities = response;
      console.log(this.cities);
    });
  };
}
