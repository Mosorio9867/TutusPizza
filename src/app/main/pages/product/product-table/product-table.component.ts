import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProductService } from 'app/shared/services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product.module';

@Component({
	selector: 'app-product-table',
	templateUrl: './product-table.component.html',
	styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

	displayedColumns: string[] = ['name', 'type', 'description', 'price', 'actions'];
	dataSource: MatTableDataSource<Product>;

	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	constructor(
		private _matDialog: MatDialog,
		private _productService: ProductService
	) {
		this.dataSource = new MatTableDataSource([]);
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this._loadData();
	}

	_loadData(): void {
		this._productService.getAll()
			.subscribe(value => {
				this.dataSource.data = value;
			})
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	_edit(id: string): void {
		this._productService.getById(id)
			.subscribe(value => this._openDetail(value));
	}

	_openDetail(data: Product): void {
		this._matDialog.open(ProductDetailComponent, {
			width: '900px',
			data: {
				title: 'Actualizar producto',
				payload: data
			}
		}).afterClosed()
			.subscribe(result => {
				if (!result) {
					return;
				}
				const data: Product = {
					id: result.id,
					name: result.name,
					description: result.description,
					type: result.type,
					price: result.price,
					pointPerUnit: result.pointPerUnit,
					pricePerPoint: result.pricePerPoint,
					active: result.active
				}
				this._productService.update(data).then(() => this._loadData());
			});
	}

	_remove(id: string): void {
		this._productService.remove(id).then(() => this._loadData());
	}
}