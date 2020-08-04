import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule
  ],
  declarations: [ProductFilterComponent],
  exports: [ProductFilterComponent]
})
export class ProductFilterModule { }
