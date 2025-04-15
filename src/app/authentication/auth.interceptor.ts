// src/app/interceptors/auth.interceptor.ts
import { HttpRequest, HttpHandlerFn, HttpEvent, HttpInterceptorFn,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from './auth-service';
import { tap } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);

  if (
    req.url.endsWith('/auth/token') ||
    req.url.endsWith('/CustomAccount/LoginPhr') ||
    req.url.endsWith('/CustomAccount/GenerateResetPasswordLink') ||
    req.url.endsWith('/CustomAccount/ResetPasswordByToken')
  ) {
    return next(req);
  }

  const authHeader = authService.getAuthorizationHeader();
  const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });

  return next(authReq).pipe(
    tap({
      error: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          console.log('req url :: ' + req.url);
          if (err.status === 401) {
            console.log('Unauthorized - handle 401 error');
          }
        }
      }
    })
  );
};