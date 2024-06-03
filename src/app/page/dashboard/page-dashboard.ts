import { Component } from "@angular/core";
import { Route, Router } from "@angular/router";
import { IPerfil, ICardView } from "src/app/_interfaces/user";
import { UserService } from "src/app/services/users/user.service";

@Component
({
  selector:'dashboard',
  templateUrl:'./page-dashboard.html',
  styleUrls:['./page-dashboard.css']
})
export class DashboardPage {
  users:IPerfil[] = [];
  cardView = {} as ICardView
  text:string = ''
  constructor(private http:UserService, private route: Router){}

  getUser(id:string) {
    const data  = this.http.get(id).subscribe((res)=>{
      {
        console.log(res);
        this.cardView =res;
        
        console.log(this.cardView)

      }
    });
    console.log(data);
    
  }
  getIdEvent(value:string){
    console.log(value)
    this.getUser(value)
    
  }


  update(id:string){
    return  this.route.navigateByUrl(`${id}/register-edit`)
  }
}
