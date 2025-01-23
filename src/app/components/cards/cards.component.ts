import { Component, Input } from '@angular/core';
import { Card } from '../../cards.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() data!: Card;
  constructor() {}

  ngOnInIt() {}
}
