import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from './select.component';
import {MatFormFieldModule, MatSelectModule, MatIconModule, MatTooltipModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        SelectComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        FlexLayoutModule,
        MatIconModule,
        FormsModule,
        MatTooltipModule
    ],
    exports: [
        SelectComponent
    ]
})
export class SelectModule {
}
