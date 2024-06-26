import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IPerfil, IUser } from "src/app/_interfaces/user";
import { UserService } from "src/app/services/users/user.service";

@Component({
  selector: 'menu-user-view',
  templateUrl:'./menu-user-view.component.html',
  styleUrls:['./menu-user-view.component.css'],
})
export class MenuUserViewComponent implements OnInit{

  constructor(private http: UserService){}

  ngOnInit(): void {
    this.getAllPacients()
  }
  name:string= '';
  fist_name:string=''
  @Output() envtUser_id = new EventEmitter<string>
  users:IPerfil[] = []
  

  getAllPacients(){

    try {
      this.http.getAll().subscribe({
        next: (data) => {
          this.users = data;
          console.log(data)
        },
      })
    } catch (error:any) {
      console.log(error)
    }
  }
  user_id(id:string) {
    this.envtUser_id.emit(id)
  }


}
