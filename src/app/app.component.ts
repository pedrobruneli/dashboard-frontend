import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public route = this.router.url.split('/')[1];

  constructor(public readonly router: Router) {
    router.events.subscribe(() => {
      this.route = this.router.url.split('/')[1];
    })
  }

  public goTo(route: string) {
    this.router.navigate([route])
    this.route = route
  }

  public logout() {
    this.router.navigate(['login'])
    localStorage.setItem('logged', 'false');
  }

}
