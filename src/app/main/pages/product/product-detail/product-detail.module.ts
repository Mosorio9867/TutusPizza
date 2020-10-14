import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { ProductFormModule } from './product-form/product-form.module';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    ProductFormModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  declarations: [ProductDetailComponent],
  entryComponents: [ProductDetailComponent]
})
export class ProductDetailModule { }
