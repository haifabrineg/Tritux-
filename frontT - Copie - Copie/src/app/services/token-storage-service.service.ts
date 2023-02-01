import { HttpClient , HttpHeaders, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mapTo, Observable, of, tap } from 'rxjs';
import { env } from '../env/env';
import { Roles } from '../models/Roles';
import { Tokens } from '../models/Tokens';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly USER_KEY = 'auth-user';
  public  roles =[];
  public Roles:Roles | undefined;
  public loggedUser: any;
  constructor(private http: HttpClient) {
   
   }

  login(Body: { username: any; password: any; }): Observable<boolean> {
    console.log(Body)
    const b = new HttpParams()
    .set('username', Body.username)
    .set('password', Body.password);
    console.log(b)
    var test = "username="+Body.username+"&password="+Body.password;


     
      

    return this.http.post(env.baseUrl+env.loginUrl,test,
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }) .pipe(
        tap(tokens => {this.doLoginUser(Body.username,<Tokens> tokens )
        this.gettokens(<Tokens>tokens)
        
        }),
        mapTo(true),
        
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }
  
 
  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(env.baseUrl+env.refreshToken, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access_token);
    }));
  }

  gettokens(tokens:Tokens){
 
 return  this.roles= tokens.roles;
  }
  getJwtToken() {
 
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens) {
    console.log(tokens)
    this.loggedUser = username;
    localStorage.setItem(this.USER_KEY,username)
    this.storeTokens(tokens);
  }
  

  private doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
    console.log(this.JWT_TOKEN + tokens.access_token)
    console.log(this.REFRESH_TOKEN)
    
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }

  getUsername():string{
    return localStorage.getItem(this.USER_KEY)+"";
  }
  
  demandToRestPassword(username:string){
    console.log(username)
    return this.http.post(env.baseUrl+env.demandToResetPassword+username,"");
    }

getConfirmationToken(username:string){
  return this.http.get(env.baseUrl+env.confirmationToken+username, {responseType: 'text'})
}

  resetPassword(newP:string,confirm:string,CONFIRMATION_TOKEN:string){

const params = new HttpParams().set('token', CONFIRMATION_TOKEN)
const header = new HttpHeaders().set('content-type','application/json')
.set('Access-Control-Allow-Origin','*')
    
    return this.http.get(env.baseUrl+env.resetPassword+newP+"/"+confirm,{'params':params})

  }

  
}