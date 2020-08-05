import { Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { UserService } from 'app/shared/services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
    // Private
    _variant: string;

    /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
        private _firebaseAuth: AngularFireAuth,
        private _userService: UserService,
        private _router: Router
    ) {
        // Set the private defaults
        this._variant = 'vertical-style-1';

        this._firebaseAuth.authState.subscribe(authState => {
            if (isNullOrUndefined(authState)) {
                this._router.navigate(['/login']);
                return false;
            } else {
                this._userService.getById(authState.uid)
                    .subscribe(value => {
                        const role = value.payload.data()['role'];
                        console.log(role)
                    })
            }
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Variant
     */
    get variant(): string {
        return this._variant;
    }

    @Input()
    set variant(value: string) {
        // Remove the old class name
        this._renderer.removeClass(this._elementRef.nativeElement, this.variant);

        // Store the variant value
        this._variant = value;

        // Add the new class name
        this._renderer.addClass(this._elementRef.nativeElement, value);
    }
}
