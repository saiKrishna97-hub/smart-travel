import { Component, OnInit } from '@angular/core';
import { APIService } from '../../services/api.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  username: any;

  constructor(private apiService: APIService) {}

  ngOnInit() {
    // this.username = this.apiService.getUsername();
    this.username = window.sessionStorage.getItem('username');
  }
}
