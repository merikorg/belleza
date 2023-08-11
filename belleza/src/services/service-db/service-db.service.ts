import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceDbService {
  baseUrl = 'http://localhost/belleza/';

  key:string = 'UbKGYtzvENFAvFEwFmJbPNqSAUBphB';

  error: string = "";

  constructor(private http: HttpClient) { }

  getData(post: string): Observable<any> {
    const query = {
      query: post,
      key: this.key      
    };

    return this.http.post<any>(this.baseUrl, query).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Ha ocurrido un error al consultar. Intente de nuevo.', error);
        return throwError('Ocurrió un error en la solicitud.');
      })
    );
  }

} 
