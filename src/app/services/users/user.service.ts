import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, catchError, retry, tap, throwError } from "rxjs";
import { IUser, IUsers } from "../_interfaces/user";
import { IData } from "./interface/user";
import { ICardView, IPerfil } from "src/app/_interfaces/user";

@Injectable({
  providedIn: 'root'
})

export class UserService
{
  readonly URL = 'http://localhost:3000/api/v1'
  constructor(private http: HttpClient){}


  get(id:string):Observable<ICardView>{
    return this.http.get<ICardView>(`${this.URL}/users/${id}`);
  }
  getUser(id:string):Observable<IUsers>{
    return this.http.get<IUsers>(`${this.URL}/users/${id}`);
  }

  getUserInfo(id:string):Observable<ICardView[]>{
    return this.http.get<ICardView[]>(`${this.URL}/users/${id}`);
  }
  getAll():Observable<IPerfil[]>{
   return this.http.get<IPerfil[]>(`${this.URL}/users`)
    .pipe(
      retry(2),
      catchError(this.handleError)

    );
   

  }

  save(data:IUser):Observable<IUser>{
     return  this.http.post<IUser>(this.URL,data).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  update(id:string,data:IUser ):Observable<IUser>{
    const res = this.http.patch<IUser>(`${this.URL}/${id}`, data).pipe(
      retry(1),
      catchError(this.handleError)
    )
    return res
  }

  delete(id:string){
    return this.http.delete(`${this.URL}/${id}`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}