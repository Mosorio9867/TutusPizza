import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-product-listing',
    templateUrl: './product-listing.component.html',
    styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

    constructor(
        private _router: Router
    ) { }

    ngOnInit(): void {
    }

    newProduct(): void {
        this._router.navigate(['/pages/product']);
    }
}
