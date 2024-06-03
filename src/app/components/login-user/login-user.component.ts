import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { IData } from "src/app/services/users/interface/user";

@Component
({
  selector:'login-user',
  templateUrl:'./login-user.component.html',
  styleUrls:['./login-user.component.css'],
})
export class LoginUserViewComponent
implements OnInit {
  loading = false;
  submitted = false;
  formGroup!:FormGroup
  constructor(private http: AuthService,
    private router: Router) {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl("", [Validators.email]),
      password: new FormControl("", [Validators.minLength(6)])
    })
    
  }

  seePassword() {

  }
  get Username(){
    return this.formGroup.get('username')
  }
  get Password(){
    return this.formGroup.get('password')
  }
  
  auth(){
    // this.submitted = true;
    // if(this.formGroup.invalid) return;
    // if(!this.formGroup.controls['username'].value.trim().length &&this.formGroup.controls['password'].value.trim().length) return;


    try {
      const data:IData = {
        email:this.formGroup.controls['username'].value.trim(),
        password: this.formGroup.controls['password'].value.trim()
       
      }
      this.loading = true;
      this.http.auth(data).subscribe((res) => {
          console.log(res);
          res.valueOf()
          this.router.navigateByUrl('/dashboard');
          
          
        }
      )
    } catch (error) {
      console.log(error);
      
      
    }
  }
}
