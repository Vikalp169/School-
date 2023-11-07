import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  stateList:state[]=[new state (1,"Andrapradesh"),new state (2,'Punjab'),new state (3,'Harayana'), new state (4,'Rajasthan'), new state (5,'Karnataka'), new state (6,'Odisha')];
  onSubmit(contactForm:{value: any;})
  {
    console.log(contactForm.value)
  }
  
}
export class state{
  id:number;
  state:string;
  constructor(id:number, state:string)
  {
    this.id=id;
    this.state=state;
  }
}