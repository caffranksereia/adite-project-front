import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";
import { Observable } from "rxjs";
import { ICardView, IUser, IUsers } from "src/app/_interfaces/user";
import { UserService } from "src/app/services/users/user.service";

@Component({
  selector:'register-edit-view',
  templateUrl:'./register-edit-view.component.html',
  styleUrls:['./register-edit-view.component.css']
})

export class RegisterEditViewComponent  implements OnInit{
  id_user: string = '';
  users:ICardView[] = []
  constructor( private http:UserService,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    this.id_user= this.route.snapshot.paramMap.get('id') || '';
    console.log(this.id_user);
    this.getUser()
  }
  getUser(){
    return this.http.getUserInfo(this.id_user).subscribe(
      user =>{ 
        console.log(user)
        this.users = user;
        console.log(this.users )
      }
    )
  }
  save(){
    console.log('save')
  }
}
