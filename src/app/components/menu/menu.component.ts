import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component
({
  selector:'menu-component',
  templateUrl:'./menu.component.html',
  styleUrls:['./menu.component.css']
})
export class MenuComponent {
  @Input()name_user ='Fabio'
  constructor(   private router: Router){}
    logOut(){
      localStorage.clear()
      this.router.navigateByUrl('');
    }

}
