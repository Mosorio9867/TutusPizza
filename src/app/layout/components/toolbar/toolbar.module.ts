import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from '@angular/material';

import {FuseSearchBarModule, FuseShortcutsModule} from '@fuse/components';
import {FuseSharedModule} from '@fuse/shared.module';

import {ToolbarComponent} from 'app/layout/components/toolbar/toolbar.component';
import {AngularFireAuthModule} from "@angular/fire/auth";

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        AngularFireAuthModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule {
}
