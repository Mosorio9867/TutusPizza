import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {ProductService} from 'app/shared/services/product.service';
import {Product} from '../product.module';
import {UUID} from 'uuid-generator-ts';
import {ProductTableComponent} from '../product-table/product-table.component';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html',
    styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

    @ViewChild(ProductTableComponent, {static: true}) productTableComponent: ProductTableComponent;

    constructor(
        private _matDialog: MatDialog,
        private _productService: ProductService
    ) {
    }

    ngOnInit(): void {
    }

    newProduct(): void {
        this._matDialog.open(ProductDetailComponent, {
            width: '900px',
            disableClose: true,
            data: {
                title: 'Crear nuevo producto'
            }
        }).afterClosed()
            .subscribe((result: Product) => {
                if (!result) {
                    return;
                }
                const uuid = new UUID();
                this._productService.create({
                    ...result,
                    id: uuid.getDashFreeUUID()
                }).then(() => this.productTableComponent._loadData());
            });
    }

    onChangeFilters(event): void {
        this.productTableComponent.applyFilter(event);
    }

    loadData(): void {
        this.productTableComponent._loadData();
    }
}
