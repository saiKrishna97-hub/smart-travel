import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { APIService } from '../../services/api.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: APIService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  login = () => {
    console.log('data', this.loginForm);
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    const obj = {
      email: email,
      password: password,
    };
    this.apiService.getLoginDetails(obj).subscribe((data) => {
      console.log(data);
      window.sessionStorage.setItem('username', data.username);
      // this.apiService.setUsername(data.username);
      this.router.navigate(['home']);
    });
  };
}
