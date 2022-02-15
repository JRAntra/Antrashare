// import { Injectable } from '@angular/core';
// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   Router,
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { LoginService } from '../login/login-service.service';
// import { RegisterService } from '../register/register.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthenticationService implements CanActivate {
//   constructor(
//     private loginService: LoginService,
//     private registerService: RegisterService,
//     private router: Router
//   ) {}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Observable<boolean> {
//     let userJwt: string = localStorage.getItem('user-jwt')!;
//     let userEmail: string = localStorage.getItem('user-email')!;

//     this.loginService.userProfile$.userJwt = JSON.parse(userJwt);
//     this.loginService.userProfile$.userEmail = JSON.parse(userEmail);

//     // if jwt-email does not match input email, redirect to login
//     if (
//       !this.loginService.checkUserToken(
//         this.loginService.userProfile$.userJwt,
//         this.loginService.userProfile$.userEmail
//       )
//     ) {
//       this.router.navigate(['/login']);
//       return of(false);
//     }
//     return of(true);
//   }
// }
