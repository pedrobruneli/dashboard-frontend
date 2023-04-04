import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';



@NgModule({
  declarations: [ButtonComponent, DropdownComponent],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
