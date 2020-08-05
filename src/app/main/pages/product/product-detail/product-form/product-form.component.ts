import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public types: any[] = [
    { name: 'Pizzeta' },
    { name: 'Mediana' },
    { name: 'Familiar' },
  ];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
