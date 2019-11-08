import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-noform',
  templateUrl: './noform.component.html',
  styleUrls: ['./noform.component.css']
})
export class NoformComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  profileForms = this.fb.group({
    textarea_poll_noform:['',[Validators.required, Validators.minLength(30)]]
  })
  ngOnInit() {
  }
  onSubmit(){
    this.router.navigateByUrl("/confirm")
}

}
export class SelectValueBindingExample {
  selected = 'option2';
}