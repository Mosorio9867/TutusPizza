import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {UserService} from "./user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private _userService: UserService,
        private router: Router,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot) {
        // if (!this._userService.usuario) {
        //     this.router.navigate(['/login']);
        //     return false;
        // }
        //
        // if (this.auth.isAuthenticated() === false) {
        //     this.router.navigate(['/login']);
        //     return false;
        // }

        return true;
    }
}
