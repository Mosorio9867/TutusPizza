import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {SaleListingComponent} from "./sale-listing.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        RouterModule,
        MatSidenavModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatBadgeModule,
        MatTooltipModule
    ],
    declarations: [
        SaleListingComponent
    ],
    exports: [
        SaleListingComponent
    ],
})
export class SaleListingModule {
}
