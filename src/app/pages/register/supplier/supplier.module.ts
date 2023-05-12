import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SupplierRoutingModule } from './supplier.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierComponent } from './supplier.component';



@NgModule({
    declarations: [SupplierComponent],
    imports: [
        CommonModule,
        SupplierRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
    providers: [provideNgxMask()]
})
export class SupplierModule { }
