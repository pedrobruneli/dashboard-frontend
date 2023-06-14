import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { SupplierRoutingModule } from './supplier.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SupplierComponent } from './supplier.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';



@NgModule({
    declarations: [SupplierComponent],
    imports: [
        CommonModule,
        SupplierRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        ToastModule,
        ButtonModule
    ],
    providers: [provideNgxMask(), MessageService]
})
export class SupplierModule { }
