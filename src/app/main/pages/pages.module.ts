import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserService} from "../shared/services/user.service";

const pagesRoutes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.dashboardModule),
    },
    {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(pagesRoutes),
    ],
    providers: [
        UserService
    ]
})
export class PagesModule {
}
