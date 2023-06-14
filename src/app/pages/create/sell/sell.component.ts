import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IProduct, ISellProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit{

  constructor(private readonly productService: ProductService, private readonly messageService: MessageService){}

  public products: IProduct[] = []
  public selectedProducts: ISellProduct[] = []
  public totalPages: number = 0
  public search = ''
  public visible = false;

  ngOnInit(): void {
    this.retrieveProducts()
  }

  public retrieveProducts(ev?: any) {
    const page = ev ? ev.first / 10 + 1 : 1
    this.productService.getProducts(this.search, page).subscribe({
      next: (response) => {
        this.products = response.products
        this.totalPages = response.totalPages
      },
      error: (err) => {
        console.log(err)
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao buscar produtos!'}); 
      },
    })
  }

  public filter(ev: any) {
    this.search = ev.target.value
    this.retrieveProducts()
  }

  public onSelectProduct(ev: IProduct) {
    this.visible = false;
    const hasProduct = this.selectedProducts.find((product) => product.code === ev.code)
    if(hasProduct) {
      hasProduct.quantity++
      return
    }
    this.selectedProducts.push({...ev, quantity: 1})
  }

  public onRemoveProduct(ev: ISellProduct) {
    this.selectedProducts = this.selectedProducts.filter((product) => product.code !== ev.code)
  }

  public toggleVisible() {
    this.visible = !this.visible
  }

  public onRowEditInit(product: ISellProduct) {
    this.selectedProducts = this.selectedProducts.map((p) => {
      if(p.code === product.code) {
        p.quantity = product.quantity
      }
      return p
    })
  }

}
