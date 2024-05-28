import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, retry, tap, throwError } from "rxjs";
import { IUser, IUsers } from "../_interfaces/user";
import { IData } from "./users/interface/user";

@Injectable({
  providedIn: 'root'
})

export class AuthService
{
  readonly URL = 'http://localhost:3000/api/v1'
  constructor(private http: HttpClient){}

  auth(data:IData){
    const user = this.http.post(`${this.URL}/auth/login`, data);
    return user;
  }
}