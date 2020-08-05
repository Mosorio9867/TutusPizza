import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html',
    styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

    constructor(
        private _matDialog: MatDialog
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
            });
    }
}
