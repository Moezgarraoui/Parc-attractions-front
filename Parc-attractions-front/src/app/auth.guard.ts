import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isLogged()) {
            // L'utilisateur est connecté, autorise l'accès à la route
            return true;
        }

        // L'utilisateur n'est pas connecté, redirige vers la page de connexion avec le retour URL
        this.router.navigate(['/connection'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
