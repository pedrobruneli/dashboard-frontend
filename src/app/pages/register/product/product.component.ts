import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IProduct } from 'src/app/models/product.model';
import { ISupplier } from 'src/app/models/supplier.model';
import { ProductService } from 'src/app/services/product.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public suppliers: ISupplier[] = []
  public supplierSelected = ''
  public isLoading = false;

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    cost_price: new FormControl('', [Validators.required, Validators.pattern(/([0-9]{1,}\.[0-9]{2})|([0-9]{1,})/g)]),
    sale_price: new FormControl('', [Validators.required, Validators.pattern(/([0-9]{1,}\.[0-9]{2})|([0-9]{1,})/g)]),
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    qnt_in_stock: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,}')]),
  })

  constructor(private readonly supplierService: SupplierService, private readonly productService: ProductService, private readonly messageService: MessageService) { }

  ngOnInit() {
    this.supplierService.getSuppliers().subscribe(suppliers => {
      this.suppliers = suppliers
    }) 
  }

  public createProduct() {
    if(!this.form.valid || !this.supplierSelected) {
      this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente!'});
      return
    }
    const product = {
      ...this.form.value,
      cost_price: Number(this.form.value.cost_price),
      sale_price: Number(this.form.value.sale_price),
      qnt_in_stock: Number(this.form.value.qnt_in_stock),
    } as IProduct
    this.isLoading = true
    this.productService.createProduct(product, this.supplierSelected).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Produto cadastrado com sucesso!'});
        this.form.reset()
      },
      error: (err) => {
        this.isLoading = false
        if(err.error.statusCode === 400) {
          this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente!'});
          return
        }
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao cadastrar produto!'});
        this.form.reset()
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }
  public clearForm() {
    this.form.reset()
  }

}
