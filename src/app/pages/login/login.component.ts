import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private readonly router: Router) {
    if (localStorage.getItem('logged') === 'true') {
      this.router.navigate([''])
    }
  }

  public login() {
    this.router.navigate([''])
    localStorage.setItem('logged', 'true')
  }
}
