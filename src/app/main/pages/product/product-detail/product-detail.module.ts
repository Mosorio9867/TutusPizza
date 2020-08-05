import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { ProductFormModule } from './product-form/product-form.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ProductFormModule
  ],
  declarations: [ProductDetailComponent],
  entryComponents: [ProductDetailComponent]
})
export class ProductDetailModule { }
