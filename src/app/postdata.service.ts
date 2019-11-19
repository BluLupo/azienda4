import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Yesform } from './yesform';
import { Noform } from './noform';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
  url= "http://localhost:3000/noform"
  url2= "http://localhost:3000/yesform"
  //url3="https://antares.hersel.it/testpost.php"
  constructor(private $http:HttpClient) { }

  PostData(
    no_form_data:Noform
  ){
   
    return this.$http.post<Noform>(this.url,no_form_data).subscribe(
      resp=>console.log("test")
    )

  }
  PostDataYes(
    yes_form_data:Yesform
  ){
      
    return this.$http.post<Yesform>(this.url2,yes_form_data).subscribe()


  }

}