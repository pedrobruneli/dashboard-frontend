import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CostumerRoutingModule } from './costumer.routing.module';
import { CostumerComponent } from './costumer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [CostumerComponent],
    imports: [
        CommonModule,
        CostumerRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
    providers: [provideNgxMask()]
})
export class CostumerModule { }
