import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'costumer',
    loadChildren: () => import('./costumer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'supplier',
    loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
