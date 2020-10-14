import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table.component';
import { MatTableModule, MatPaginatorModule, MatIconModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        FlexLayoutModule,
        ProductDetailModule,
        MatSlideToggleModule
    ],
  declarations: [ProductTableComponent],
  exports: [ProductTableComponent],
})
export class ProductTableModule { }
