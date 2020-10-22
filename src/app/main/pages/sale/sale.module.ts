import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { SaleListingComponent } from "./sale-listing/sale-listing.component";
import { SaleListingModule } from "./sale-listing/sale-listing.module";
import { SaleCartModule } from './sale-cart/sale-cart.module';
import { SaleCartComponent } from './sale-cart/sale-cart.component';

const routes = [
    {
        path: '',
        component: SaleListingComponent,
    },
    {
        path: 'cart',
        component: SaleCartComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        SaleListingModule,
        SaleCartModule
    ],
    providers: []
})
export class SaleModule {
}

