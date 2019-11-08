import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service: PersonaService) { }

  names: string[];
  //messaggio: string;

  ngOnInit() {
   // this.names.push("andrea");
    this.names = this.service.getNames();
    this.service.addName("pippo");
  }

  click() {
   //this.service.addName("sdfd");
    this.service.removeLastName();
  }


}
