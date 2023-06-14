import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import {  CustomerRoutingModule } from './customer.routing.module';
import {  CustomerComponent } from './customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
    declarations: [CustomerComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        ToastModule,
        ButtonModule,
    ],
    providers: [provideNgxMask(), MessageService]
})
export class CustomerModule { }
