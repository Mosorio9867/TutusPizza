import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {FlexLayoutModule} from "@angular/flex-layout";

const routes = [
    {
        path: '**',
        component: DashboardComponent,
    }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        FlexLayoutModule,
    ]
})
export class dashboardModule {
}
