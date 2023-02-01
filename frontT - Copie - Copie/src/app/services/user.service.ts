import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { env } from '../env/env';
import { User } from '../models/User';
import { TokenStorageService } from './token-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private tokenservice:TokenStorageService) { }


  getUsers(){
  
    return this.http.get<User[]>(env.baseUrl+env.getUsers)
  }


  registerUser(User : User){


    return this.http.post(env.baseUrl+env.saveUser,User)
     
  }
}
