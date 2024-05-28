import { Component } from "@angular/core";

@Component({
  selector: 'delete-app',
  templateUrl:'./delete.component.html',
  styleUrls:['./delete.component.css'],
})

export class DeleteComponent{
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