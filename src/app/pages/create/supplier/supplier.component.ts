import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MessageService } from 'primeng/api';
import { ISupplier } from 'src/app/models/supplier.model';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {

  public isLoading = false;

  public form = new FormGroup({
    corporate_name: new FormControl('', Validators.required),
    fantasy_name: new FormControl('', Validators.required),
    cnpj: new FormControl('', [Validators.required, Validators.pattern('[0-9]{14}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor(private readonly messageService: MessageService, private readonly supplierService: SupplierService) { }

  public createSupplier() {
    if(!this.form.valid) {
      this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente!'});
      return
    }
    this.isLoading = true
    this.supplierService.createSupplier(this.form.value as ISupplier).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Fornecedor cadastrado com sucesso!'});
        this.form.reset()
      },
      error: (err) => {
        this.isLoading = false
        if(err.error.statusCode === 400) {
          this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente!'});
          return
        }
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao cadastrar fornecedor!'});
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
