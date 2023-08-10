import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServiceDbService {
  baseUrl = 'http://localhost/belleza/';

  key:string = 'UbKGYtzvENFAvFEwFmJbPNqSAUBphB';

  error: string = "";

  constructor(private http: HttpClient) { }

  getData(post:string) {
    let query = {
      query: post,
      key: this.key      
    }
    return this.http.post<any>(this.baseUrl, query).pipe(
      catchError((error: HttpErrorResponse) => {
        this.error =  'Ha ocurrido un error al consultar. Intente de nuevo.';
        return throwError('Ocurrió un error en la solicitud.');
      })
    );
  }

  getError(){
    return this.error;
  }

} 
