import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Option } from 'app/shared/components/select/select.component';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  public types: Option[] = [
    { id: 'Pizzeta', text: 'Pizzeta', active: true },
    { id: 'Mediana', text: 'Mediana', active: true },
    { id: 'Familiar', text: 'Familiar', active: true },
  ];
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
