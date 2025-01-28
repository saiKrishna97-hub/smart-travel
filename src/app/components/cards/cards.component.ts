import { Component, Input } from '@angular/core';
import { Card } from '../../cards.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() data!: Card;
  constructor(private router: Router) {}

  ngOnInIt() {}
  bookNow = () => this.router.navigate(['bookings']);
}
