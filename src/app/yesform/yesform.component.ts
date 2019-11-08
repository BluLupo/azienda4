import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-yesform',
  templateUrl: './yesform.component.html',
  styleUrls: ['./yesform.component.css']
})
export class YesformComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }
  
  profileForms = this.fb.group({
    textarea_poll:['',[Validators.required, Validators.minLength(30)]],
    checkboxHTML:[''],
    checkboxJS:[''],
    checkboxCSS:[''],
    checkboxANGULAR:[''],
    checkboxSDS:['']
  })
  ngOnInit() {
  }

  onSubmit(){
      this.router.navigateByUrl("/confirm")
  }

}

