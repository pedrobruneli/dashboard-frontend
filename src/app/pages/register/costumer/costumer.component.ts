import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-costumer',
  templateUrl: './costumer.component.html',
  styleUrls: ['./costumer.component.scss']
})
export class CostumerComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    rg: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
    cpf: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    cep: new FormControl('', [Validators.required, Validators.pattern('[0-9]{8}')]),
  })

  constructor() { }

  ngOnInit() {
  }

}
