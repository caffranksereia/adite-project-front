import { Component } from "@angular/core";

@Component({
  selector: 'save-app',
  templateUrl:'./save.component.html',
  styleUrls:['./save.component.css'],
})

export class SaveComponent{
  submitted:boolean = false;
  mesg_correct:string = '';
    seeModa: boolean = false;
    toggle() {
      this.seeModa = !this.seeModa
    }
  
    constructor(){}
  
    getId(id:string){ 
     
    
    }
  
    deleteId() {
    }
  
    deletetoggleid() {
    }
}