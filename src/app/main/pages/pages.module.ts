import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from "../../shared/services/user.service";
import { PagesComponent } from "./pages.component";
import { FuseProgressBarModule } from "../../../@fuse/components";
import { VerticalLayout1Module } from "../../layout/vertical/layout-1/layout-1.module";
import { CommonModule } from "@angular/common";

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardModule),
    },
    {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pagesRoutes),
        FuseProgressBarModule,
        VerticalLayout1Module,
    ],
    declarations: [
        PagesComponent
    ],
    providers: [
        UserService
    ]
})
export class PagesModule {
}
