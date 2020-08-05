import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListingComponent } from './product-listing.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductTableModule } from '../../product/product-table/product-table.module';
import { ProductFilterModule } from '../../product/product-filter/product-filter.module';
import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        ProductTableModule,
        ProductFilterModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ],
    declarations: [ProductListingComponent]
})
export class ProductListingModule { }
