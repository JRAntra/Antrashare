import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.accessToken;
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + token)
      });
    }

    return next.handle(req).pipe(
      catchError((error: any) => {

        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('HttpHandlerInterceptor: ', error);
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);

            if (error.status === 401) {
              this.authService.logout();

              location.reload();
            }
          }
        }

        return throwError(() => error);
      })
    );
  }

}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true,
    }
  ]
})
export class HttpHandlerInterceptorModule { }