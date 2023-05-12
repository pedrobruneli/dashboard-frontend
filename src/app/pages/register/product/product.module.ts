
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule,
        ReactiveFormsModule,
        NgxMaskDirective,
        CurrencyMaskModule
    ],
    providers: [provideNgxMask()]
})
export class ProductModule { }
