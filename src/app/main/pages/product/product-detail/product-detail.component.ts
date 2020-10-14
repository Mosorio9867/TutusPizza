import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

    public title: string;
    public form: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ProductDetailComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private _formBuilder: FormBuilder
    ) {
        this.title = data.title;
        this.buildForm(!isNullOrUndefined(data.payload) ? data.payload : {});
    }

    buildForm(data): void {
        this.form = this._formBuilder.group({
            id: [data.id || null],
            name: [data.name || null, Validators.required],
            active: [data.active || false, Validators.required],
            description: [data.description || null, Validators.required],
            priceSmall: [data.priceSmall || null, Validators.required],
            pointPerUnitSmall: [data.pointPerUnitSmall || null, Validators.required],
            pricePerPointSmall: [data.pricePerPointSmall || null, Validators.required],
            priceMedium: [data.priceMedium || null, Validators.required],
            pointPerUnitMedium: [data.pointPerUnitMedium || null, Validators.required],
            pricePerPointMedium: [data.pricePerPointMedium || null, Validators.required],
            priceLarge: [data.priceLarge || null, Validators.required],
            pointPerUnitLarge: [data.pointPerUnitLarge || null, Validators.required],
            pricePerPointLarge: [data.pricePerPointLarge || null, Validators.required],
        });
    }

    close(value = null): void {
        this.dialogRef.close(value);
    }
}
