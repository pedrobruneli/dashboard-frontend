import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public form = new FormGroup({
    name: new FormControl('', Validators.required),
    cost_price: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,}\.[0-9]{2}')]),
    sell_price: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,}\.[0-9]{2}')]),
    description: new FormControl('', [Validators.required]),
    code: new FormControl('', [Validators.required]),
    qnt_in_stock: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
  })

  constructor() { }

  ngOnInit() {
  }

}
