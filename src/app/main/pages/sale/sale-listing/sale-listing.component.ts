import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSidenav } from "@angular/material/sidenav";
import { fuseAnimations } from "../../../../../@fuse/animations";
import { Product, ProductInCart } from "../../product/product.module";
import { ProductService } from "../../../../shared/services/product.service";
import { map } from "rxjs/operators";

@Component({
    selector: 'app-sale-listing',
    templateUrl: './sale-listing.component.html',
    styleUrls: ['./sale-listing.component.scss'],
    animations: [fuseAnimations]
})
export class SaleListingComponent implements OnInit {

    public viewMode: string = 'grid-view';
    public filterForm: FormGroup;
    public currentPage: any;
    public categories: any[] = [
        { id: 'salty', text: 'Pizzas saladas' },
        { id: 'desserts', text: 'Pizzas postres' },
    ];
    public products: Product[] = [];

    constructor(
        private _formBuilder: FormBuilder,
        public _productService: ProductService
    ) {
        this.filterForm = this._formBuilder.group({
            search: [null]
        });
    }

    ngOnInit(): void {
        this._loadData();
    }

    _loadData(): void {
        this._productService.getAll()
            .pipe(
                map((response: Product[]) => {
                    return response.map((product: Product) => {
                        return { ...product, photo: '../../../../assets/images/profile/braies-lake-small.jpg' }
                    }).filter((e: Product) => e.active)
                })
            )
            .subscribe((data: Product[]) => {
                this.products = data;
            })
    }

    addToCart(element: any): void {
        const productRepeat = this._productService.productsInCartSubject.getValue().filter((e: any) => e.id === element.id);
        if (productRepeat.length === 0) {
            this._productService.productsInCartSubject.getValue().push({ ...element, quantity: 1 });
            this._productService.addToCart(this._productService.productsInCartSubject.getValue());
        } else {
            this._productService.addToCart(this._productService.productsInCartSubject.getValue().map((e: ProductInCart) => {
                return { ...e, quantity: e.quantity + 1 }
            }));
        }
    }
}
