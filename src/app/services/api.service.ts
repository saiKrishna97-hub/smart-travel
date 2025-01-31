import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  username: string = '';
  url: string = '/assets/jsons/cities.json';
  constructor(private http: HttpClient) {}

  getLoginDetails = (obj: any): Observable<any> => {
    return this.http.post('http://localhost:8000/login', obj);
  };

  getRegisterDetails = (obj: any): Observable<any> => {
    return this.http.post('http://localhost:8000/register', obj);
  };

  setUsername(username: string) {
    this.username = username;
  }
  getUsername() {
    return this.username;
  }

  getCities() {
    return this.http.get(this.url);
  }
}
