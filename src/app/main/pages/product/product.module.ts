import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductListingModule } from './product-listing/product-listing.module';
import { ProductDetailModule } from './product-detail/product-detail.module';

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
})
export class ProductModule { }
