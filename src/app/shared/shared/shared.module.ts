import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { HomeComponent } from 'src/app/pages/home/home.component';



@NgModule({
  declarations: [ButtonComponent, DropdownComponent, HomeComponent],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
