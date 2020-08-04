import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.form = this._formBuilder.group({
      search: [null]
    })
  }

  ngOnInit() {
  }

}
