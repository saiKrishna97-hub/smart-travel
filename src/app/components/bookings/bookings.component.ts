import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent implements OnInit {
  cities: any = '';
  city: any = '';
  bookingForm: FormGroup;

  constructor(private apiService: APIService, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      sourceCountry: ['', Validators.required],
      destCountry: ['', Validators.required],
      datepicker: ['', Validators.required],
      persons: ['', Validators.required, Validators.max(5)],
    });
  }

  ngOnInit() {
    this.getCities();
  }

  getCities = () => {
    this.apiService.getCities().subscribe((response) => {
      this.cities = response;
      this.city = this.cities
        .filter((ele: any) => ele.state === 'Andhra Pradesh')
        .map((ele: any) => ele.city);
    });
  };
}
