import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	public title: string;
	public form: FormGroup;

	constructor(
		private dialogRef: MatDialogRef<ProductDetailComponent>,
		@Inject(MAT_DIALOG_DATA) data,
		private _formBuilder: FormBuilder
	) {
		this.title = data.title;

		this.form = this._formBuilder.group({
			name: [null, Validators.required],
			description: [null, Validators.required],
			type: [null, Validators.required],
			price: [null, Validators.required],
			pointPerUnit: [null, Validators.required],
			pricePerPoint: [null, Validators.required],
			active: [true, Validators.required],
		});
	}

	ngOnInit() {
	}

	close(value = null): void {
		this.dialogRef.close(value);
	}
}
