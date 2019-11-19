import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'
//Servizio
import { PostdataService } from '../postdata.service';
//Classe
import { Yesform } from '../yesform';

@Component({
  selector: 'app-yesform',
  templateUrl: './yesform.component.html',
  styleUrls: ['./yesform.component.css']
})
export class YesformComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private ps2:PostdataService) { }
  
  profileForms = this.fb.group({
    textarea_poll:['',[Validators.required, Validators.minLength(30)]],
    checkboxHTML:[null],
    checkboxJS:[null],
    checkboxCSS:[null],
    checkboxANGULAR:[null],
    checkboxSDS:[null]
  })
  ngOnInit() {
  }

  onSubmit(){
      console.log(this.profileForms.value);
      
      this.ps2.PostDataYes(new Yesform(
        this.profileForms.get("textarea_poll").value,
        this.profileForms.get("checkboxHTML").value,
        this.profileForms.get("checkboxJS").value,
        this.profileForms.get("checkboxCSS").value,
        this.profileForms.get("checkboxANGULAR").value,
        this.profileForms.get("checkboxSDS").value))
      this.router.navigateByUrl("/confirm");


  }

}

