import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dati } from './dati';
import {HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  constructor(private http:HttpClient){} 

  dati:Dati[] = new Array();


  testing(){
    //SE VOGLIO USARE UN TOKEN LO METTO QUA
    const httpOp = {
      headers: new HttpHeaders({
      'Authorization' : 'token'
    })}
    //RICHIAMO UN API 
    this.http.get<Dati[]>("https://jsonplaceholder.typicode.com/posts/",httpOp)
      .subscribe((resp:Dati[])=>{
        resp.forEach((x)=>this.dati.push(x))
        console.log(this.dati)
      })

  }
  getDati(){
    return this.dati
  }
}


//const httpOptions = {
  //headers: new HttpHeaders({

    //'Content-Type': 'application/json',
    //'Authorization': 'token'
  //})
//}
//httpOptions.headers.set('Authorization','token')
//this.http.get<data_type>(this.url,httpOptions)