import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service';
import { Dati } from '../dati';
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {

  constructor(private serv: RestAPIService) { }

  dati:Dati[];

  ngOnInit() {
    this.serv.testing()
    this.dati=this.serv.getDati()
  }

}
