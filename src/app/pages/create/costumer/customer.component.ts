import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ICustomer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  public isLoading: boolean = false;

  constructor(private readonly customerService: CustomerService, private readonly messageService: MessageService){}

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    rg: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
    cpf: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cep: new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}')]),
  })

  public createCustomer() {
    if(!this.form.valid) {
      this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente!'});
      return
    }
    this.isLoading = true
    this.customerService.createCustomer(this.form.value as ICustomer).pipe(first()).subscribe({
      next: () => {
        this.messageService.add({severity:'success', summary:'Sucesso', detail:'Cliente cadastrado com sucesso!'});
        this.form.reset()
      },
      error: (err) => {
        this.isLoading = false
        if(err.error.statusCode === 400) {
          this.messageService.add({severity:'error', summary:'Erro', detail:'Preencha os dados corretamente!'});
          return
        }
        this.messageService.add({severity:'error', summary:'Erro', detail:'Erro ao cadastrar cliente!'});
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
