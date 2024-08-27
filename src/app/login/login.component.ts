// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { SweetAlert2LoaderService } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router, private swalService: SweetAlert2LoaderService) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        localStorage.setItem('token', response.success.token);
        localStorage.setItem('name', this.email);
        Swal.fire({
          text: 'Successfully logged in!',
          icon: 'success',
          toast: true,
          position: 'top-right',
          timer: 3000, // Duration in milliseconds
          timerProgressBar: true,
          showConfirmButton: false,
          didClose: () => {
            // Redirect after toast timeout
            this.router.navigate(['/menu']);
          }
        });
      },
      error => {
        this.error = 'Login failed!';
        Swal.fire({
          text: 'Invalid User. Please try again.',
          icon: 'error',
          toast: true,
          position: 'top-right',
          timer: 3000, // Duration in milliseconds
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    );
  }
}
