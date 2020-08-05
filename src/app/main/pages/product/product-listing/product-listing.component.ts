import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from 'app/shared/services/product.service';
import { Product } from '../product.module';
import { UUID } from 'uuid-generator-ts';
import { ProductTableComponent } from '../product-table/product-table.component';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html',
    styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

    @ViewChild(ProductTableComponent, { static: true }) productTableComponent: ProductTableComponent;

    constructor(
        private _matDialog: MatDialog,
        private _productService: ProductService
    ) { }

    ngOnInit(): void {
    }

    newProduct(): void {
        this._matDialog.open(ProductDetailComponent, {
            width: '900px',
            data: {
                title: 'Crear nuevo producto'
            }
        }).afterClosed()
            .subscribe(result => {
                if (!result) {
                    return;
                }
                const uuid = new UUID();
                const data: Product = {
                    id: uuid.getDashFreeUUID(),
                    name: result.name,
                    description: result.description,
                    type: result.type,
                    price: result.price,
                    pointPerUnit: result.pointPerUnit,
                    pricePerPoint: result.pricePerPoint,
                    active: result.active
                }
                this._productService.create(data).then(() => this.productTableComponent._loadData());
            });
    }

    onChangeFilters(event): void {
        this.productTableComponent.applyFilter(event);
    }
}
