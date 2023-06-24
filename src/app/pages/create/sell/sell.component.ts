import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ICustomer } from 'src/app/models/customer.model';
import { IProduct, ISellProduct } from 'src/app/models/product.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { SellService } from 'src/app/services/sell.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit{

  constructor(private readonly productService: ProductService, private readonly messageService: MessageService, private readonly sellService: SellService, private readonly customerService: CustomerService){}

  public products: IProduct[] = []
  public selectedProducts: ISellProduct[] = []
  public clonedProducts: { [s: string]: ISellProduct } = {};

  public customers: ICustomer[] = []
  public selectedCustomer: ICustomer | undefined

  public totalPages: number = 0
  public search = ''
  public visible = false;

  public isSelling = false

  ngOnInit(): void {
    this.retrieveProducts()
    this.retrieveCustomers()
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
    this.clonedProducts[product.id] = { ...product };
  }

  public onRowEditSave(product: ISellProduct, index: number) {
    if (product.quantity > 0) {
      delete this.clonedProducts[product.id];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Produto atualizado' });
      return
    }
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Quantidade invalida' });
    this.selectedProducts[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }

  public onRowEditCancel(product: ISellProduct, index: number) {
    this.selectedProducts[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
  }

  public sell() {
    if(!this.selectedProducts.length){
      this.messageService.add({severity:'error', summary:'Erro', detail:'Nenhum produto selecionado!'});
      return
    }
    if(!this.selectedCustomer){
      this.messageService.add({severity:'error', summary:'Erro', detail:'Nenhum cliente selecionado!'});
      return
    }
    this.isSelling = true
    this.sellService.sellProducts(this.selectedProducts, this.selectedCustomer.id).subscribe({
      next: () => {
        this.selectedProducts = []
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Venda realizada com sucesso!'});
        this.isSelling = false
      },
      error: (err) => {
        this.selectedProducts = []
        console.log(err)
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao realizar venda!'});
        this.isSelling = false
      }
    })
  }

  private retrieveCustomers() {
    this.customerService.listCustomers().subscribe({
      next: (response) => {
        this.customers = response
      },
      error: (err) => {
        console.log(err)
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao buscar clientes!'}); 
      }
    })
  }

}
