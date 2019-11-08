import { Component, OnInit } from '@angular/core';
import { Hero }    from '../hero';
import { Persona }    from '../persona';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  person = new Persona(null,null,null);

  submitted = false;

  onSubmit() { this.submitted = true; }
  onSubmit2(){
    


  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}