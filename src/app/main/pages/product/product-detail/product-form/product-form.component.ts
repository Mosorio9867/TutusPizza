import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

    @Input() form: FormGroup;

    constructor() {
    }

    ngOnInit() {
    }

}
