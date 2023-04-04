import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() routeLink = '';
  @Input() icon = '';
  @Input() label = '';

  public isClicked = false;


  constructor(public readonly router: Router, private readonly ref: ElementRef) {
  }

  public log() {
    console.log(this.ref)
  }

  public toggleClicked() {
    this.isClicked = !this.isClicked
  }

}
