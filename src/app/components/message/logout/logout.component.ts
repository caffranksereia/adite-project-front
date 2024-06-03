import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'logout-app',
  templateUrl:'./logout.component.html',
  styleUrls:['./logout.component.css'],
})

export class LogOutComponent{
    seeModa: boolean = false;
    constructor(private router:Router){}
    toggle() {
      this.seeModa = !this.seeModa
    }
  
  
    logOut(){ 
      this.router.navigateByUrl('');
    }
}