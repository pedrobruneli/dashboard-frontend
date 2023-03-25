import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private readonly router: Router) { }

  public goHome() {
    this.router.navigate(['home'])
  }

  public callSupport() {
    alert('Implementacao ainda nao realizada')
  }
}
