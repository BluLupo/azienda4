import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  names = ["marco", "luigi", "luca"];

  constructor() { }

  getNames(): Array<string> {
    return this.names;
  }

  addName(name: string){
    this.names.push(name);
  }

  removeLastName() {
    this.names.pop();
  }

  
}
