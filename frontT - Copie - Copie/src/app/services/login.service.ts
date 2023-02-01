import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { env } from '../env/env';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { TokenStorageService } from './token-storage-service.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});


  constructor(private _http:HttpClient , private tokenService : TokenStorageService) { }

  login(Body: { username: any; password: any; }): Observable<any> {
    console.log(Body)
    const b = new HttpParams()
    .set('username', Body.username)
    .set('password', Body.password);
    console.log(b)
    var test = "username="+Body.username+"&password="+Body.password;


     
      

    return this._http.post(env.baseUrl+env.loginUrl,test,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  register(user: { username: any; email: any; password: any; }): Observable<any> {
    return this._http.post(env.baseUrl+env.saveUser, {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }

}
