import { DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { UserService } from 'src/app/services/user.service';
import * as THREE from 'three';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list: User[] = [];
  constructor(  private userservice: UserService,private tokenservice : TokenStorageService ) {
   }

  ngOnInit(): void {
console.log(this.tokenservice.getJwtToken())
this.getUsers();
  }
getUsers(){
 return this.userservice.getUsers().subscribe(
    response=>{
this.list=response
      console.log(this.list)
    }
  );
}

}
