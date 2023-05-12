import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    cnpj: new FormControl('', [Validators.required, Validators.pattern('[0-9]{14}')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{11}')]),
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  constructor() { }

  ngOnInit() {
  }

}
