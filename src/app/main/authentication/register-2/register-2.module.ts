import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

import {FuseSharedModule} from '@fuse/shared.module';

import {Register2Component} from 'app/main/authentication/register-2/register-2.component';
import {AngularFireAuthModule} from "@angular/fire/auth";

const routes = [
    {
        path: '**',
        component: Register2Component
    }
];

@NgModule({
    declarations: [
        Register2Component
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule,
        AngularFireAuthModule
    ]
})
export class Register2Module {
}
