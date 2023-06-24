import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table'
import { DialogModule } from 'primeng/dialog'
import { SellComponent } from './sell.component';
import { SellRoutingModule } from './sell.routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalculateTotalPipe } from 'src/app/pipes/calculateTotal.pipe';

@NgModule({
    declarations: [SellComponent, CalculateTotalPipe],
    imports: [
        CommonModule,
        SharedModule,
        SellRoutingModule,
        ReactiveFormsModule,
        ToastModule,
        ButtonModule,
        TableModule,
        DialogModule,
        InputTextModule,
        FormsModule,
        DropdownModule
    ],
    providers: [provideNgxMask(), MessageService]
})
export class SellModule { }
