import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	public title: string;

	constructor(
		private dialogRef: MatDialogRef<ProductDetailComponent>,
		@Inject(MAT_DIALOG_DATA) data,
	) {
		this.title = data.title;
	}

	ngOnInit() {
	}

	close(value = null): void {
		this.dialogRef.close(value);
	}
}
