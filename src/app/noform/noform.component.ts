import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {PostdataService} from '../postdata.service'
import { Noform } from '../noform';


@Component({
  selector: 'app-noform',
  templateUrl: './noform.component.html',
  styleUrls: ['./noform.component.css']
})
export class NoformComponent implements OnInit {
  select1 = "HTML"
  select2 = "JAVASCRIPT"
  select3 = "CSS"
  select4 = "ANGULAR"
  constructor(private fb:FormBuilder,private router:Router,private ps:PostdataService) { }

  profileForms = this.fb.group({
    textarea_poll_noform:['',[Validators.required, Validators.minLength(30)]],
    select_no_form:[null]
  })
  ngOnInit() {
  }
  onSubmit(){
    console.log(this.profileForms.value);
    this.ps.PostData(new Noform(
      this.profileForms.get("textarea_poll_noform").value,
      this.profileForms.get("select_no_form").value));
      
    this.router.navigateByUrl("/confirm");
}

}
export class SelectValueBindingExample {
  selected = 'option2';
}