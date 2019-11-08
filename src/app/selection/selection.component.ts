import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  select1 = "HTML"
  select2 = "JAVASCRIPT"
  select3 = "CSS"
  select4 = "ANGULAR"
  constructor() { }

  ngOnInit() {
  }

}

