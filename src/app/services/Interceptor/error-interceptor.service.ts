import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../app/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor(private auth:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {

        let errorMessage = 'Une erreur s\'est produite';

        if (error.error instanceof ErrorEvent) {

          errorMessage = `Erreur : ${error.error.message}`;

        } 
        else {

          if (error.status === 401) {
            errorMessage = 'Non autorisé';
            this.auth.logout();

          } else if (error.status === 403) {

            errorMessage = 'Accès refusé';

          } else if (error.status === 404) {

            errorMessage = 'Ressource non trouvée';

          } else {
            
            errorMessage = `Code d'erreur : ${error.status}, Message : ${error.message}`;
          }
        }
        console.error(errorMessage);
        return throwError(() => new Error("Erreur d'accès au serveur"));

      })
    );
  }
}
