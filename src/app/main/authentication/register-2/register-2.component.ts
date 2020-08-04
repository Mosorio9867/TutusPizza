import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../shared/services/user.service";
import UserCredential = firebase.auth.UserCredential;

@Component({
    selector: 'register-2',
    templateUrl: './register-2.component.html',
    styleUrls: ['./register-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Register2Component implements OnInit, OnDestroy {
    registerForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _angularFireAuth: AngularFireAuth,
        private _router: Router,
        private _matSnackBar: MatSnackBar,
        private _userService: UserService
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

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.registerForm = this._formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.registerForm.get('password').valueChanges
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.registerForm.get('passwordConfirm').updateValueAndValidity();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    createAccount() {
        this._angularFireAuth.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
            .then((response: UserCredential) => {
                this.createUser({
                    id: response.user.uid,
                    role: 'client',
                    username: this.registerForm.value.name,
                    email: this.registerForm.value.email
                });
            })
            .catch(() => {
                this._matSnackBar.open('Hubo un error al crear la cuenta, intente mas tarde', 'Aceptar', {
                    duration: 5000,
                    panelClass: 'alert-error'
                });
            });
    }

    createUser(data: any): void {
        this._userService.create(data)
            .then(() => {
                this._router.navigate(['/login']).then(() => {
                    this._matSnackBar.open('La cuenta se creo correctamente, inicie sesión por favor.', 'Aceptar', {
                        duration: 5000,
                    })
                });
            });
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === '') {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return {'passwordsNotMatching': true};
};
