import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CardsComponent } from '../cards/cards.component';
import { Card } from '../../cards.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent, CardsComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards: Card[] = [
    {
      mainImageUrl:
        'https://media.istockphoto.com/id/155439315/photo/passenger-airplane-flying-above-clouds-during-sunset.jpg?s=612x612&w=0&k=20&c=LJWadbs3B-jSGJBVy9s0f8gZMHi2NvWFXa3VJ2lFcL0=',
      services: 'Transport Services',
    },
    {
      mainImageUrl:
        'https://images.unsplash.com/photo-1561501900-3701fa6a0864?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D',
      services: 'Accomodation Services',
    },
    {
      mainImageUrl:
        'https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg',
      services: 'Food Services',
    },
    // {
    //   mainImageUrl:
    //     'https://media.istockphoto.com/id/519870714/photo/taxi.jpg?s=612x612&w=0&k=20&c=mzlqm5eisvu-B7hCyOK3LAsR4ugFTsHtC2kMWUmbA0Y=',
    //   modeOfTransport: 'Cab/Taxi Services',
    // },
  ];

  constructor() {}
  ngOnInit() {}
}
