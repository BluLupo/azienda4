import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dati } from './dati';
import { HttpHeaders } from '@angular/common/http'
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http: HttpClient) {}

  get(): Observable<Dati[]> {
    //SE VOGLIO USARE UN TOKEN LO METTO QUA
    const httpOp = {
      headers: new HttpHeaders({
      'Authorization' : 'token'
      })
    };

    //RICHIAMO UN API
    return this.http.get<Dati[]>("https://antares.hersel.it/api.php");
  }
}
