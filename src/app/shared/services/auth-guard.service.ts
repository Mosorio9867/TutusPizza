import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from "./user.service";
import {AngularFireAuth} from "@angular/fire/auth";
import {isNullOrUndefined} from "util";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private _userService: UserService,
        private router: Router,
        private firebaseAuth: AngularFireAuth,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        this.firebaseAuth.authState.subscribe(authState => {
            if (isNullOrUndefined(authState)) {
                this.router.navigate(['/login']);
                return false;
            }
        });

        return true;
    }
}
