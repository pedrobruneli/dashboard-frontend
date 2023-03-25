import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const objects = document.getElementsByTagName('embed')
    console.log(objects)
    for (let i = 0; i != objects.length; i++) {
      console.log(objects.item(i)!.getSVGDocument())
    }
  }

}
