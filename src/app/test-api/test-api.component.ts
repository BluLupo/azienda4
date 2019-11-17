import { Component, OnInit } from '@angular/core';
import { RestAPIService } from '../rest-api.service';
import { Dati } from '../dati';
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {

  constructor(private serv: RestAPIService) {}

  data: Dati[];

  ngOnInit() {
    this.serv.get().subscribe(data => this.data = data);
    // this.serv.get().then(data => this.data = data).catch(e => console.log(e));
  }

}
