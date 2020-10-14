import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductListingModule } from './product-listing/product-listing.module';
import { ProductDetailModule } from './product-detail/product-detail.module';
import { ProductService } from 'app/shared/services/product.service';
import {Validators} from "@angular/forms";

export interface Product {
    id: string;
    name: string;
    description: string;
    active: boolean;
    priceSmall: number;
    pointPerUnitSmall: number;
    pricePerPointSmall: number;
    priceMedium: number;
    pointPerUnitMedium: number;
    pricePerPointMedium: number;
    priceLarge: number;
    pointPerUnitLarge: number;
    pricePerPointLarge: number;
}

const routes = [
    {
        path: 'list',
        component: ProductListingComponent,
    },
    {
        path: '',
        component: ProductDetailComponent,
    },
    {
        path: ':id',
        component: ProductDetailComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        ProductListingModule,
        ProductDetailModule
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule { }

