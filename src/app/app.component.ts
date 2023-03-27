import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
