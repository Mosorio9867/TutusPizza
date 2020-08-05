import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

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
			description: [data.description || null, Validators.required],
			type: [data.type || null, Validators.required],
			price: [data.price || null, Validators.required],
			pointPerUnit: [data.pointPerUnit || null, Validators.required],
			pricePerPoint: [data.pricePerPoint || null, Validators.required],
			active: [data.active || true, Validators.required],
		});
	}

	close(value = null): void {
		this.dialogRef.close(value);
	}
}
