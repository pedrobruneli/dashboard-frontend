
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';



@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        FormsModule,
        ButtonModule,
        ToastModule
    ],
    providers: [provideNgxMask(), MessageService]
})
export class ProductModule { }
