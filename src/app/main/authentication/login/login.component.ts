import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FuseSplashScreenService} from "../../../../@fuse/services/splash-screen.service";
import * as firebase from "firebase";
import {UserService} from "../../../shared/services/user.service";
import UserCredential = firebase.auth.UserCredential;

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _angularFireAuth: AngularFireAuth,
        private _router: Router,
        private _matSnackBar: MatSnackBar,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _userService: UserService,
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    signIn() {
        this._fuseSplashScreenService.show();
        this._angularFireAuth
            .signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
            .then((authState: UserCredential) => {
                this._userService.getById(authState.user.uid)
                    .subscribe((currentUser) => {
                        const user: any = currentUser.payload.data() as firebase.User;
                        let url = user.role === 'admin' ? '/pages/dashboard' : '/pages/sales';
                        this._router.navigate([url])
                            .then(() => {
                                window.location.reload();
                            });
                    });
            })
            .catch(() => {
                this._fuseSplashScreenService.hide();
                this._matSnackBar.open('El usuario o la contraseña ingresada no es correcta.', 'Aceptar', {
                    duration: 5000,
                    panelClass: 'alert-error'
                })
            });
    }
}
