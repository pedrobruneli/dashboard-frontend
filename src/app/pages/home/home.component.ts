import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  public userLogged = localStorage.getItem('logged') === 'true' ?? false;

  constructor(public readonly router: Router) {
    router.events.subscribe(() => {
      this.userLogged = localStorage.getItem('logged') === 'true' ?? false;
    })
  }

  public goTo(route: string) {
    this.router.navigate([route])
    localStorage.setItem('logged', 'true');
    this.userLogged = true
  }

  public logout() {
    this.router.navigate(['login'])
    localStorage.setItem('logged', 'false');
    this.userLogged = false
  }

}
