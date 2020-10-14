import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {SaleListingComponent} from "./sale-listing/sale-listing.component";
import {SaleListingModule} from "./sale-listing/sale-listing.module";

const routes = [
    {
        path: '',
        component: SaleListingComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        RouterModule.forChild(routes),
        SaleListingModule
    ],
    providers: []
})
export class SaleModule {
}

