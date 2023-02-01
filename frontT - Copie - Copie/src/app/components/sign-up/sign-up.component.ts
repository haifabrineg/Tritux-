import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  list=[];
  user:User;
    constructor(  private userservice: UserService,private tokenservice : TokenStorageService ) {
      this.user=new User
     }
  ngOnInit(): void {
  }
  

  getUsers(){
    this.userservice.getUsers().subscribe(
      ( data:any) =>{ this.list = data;
      console.log(data)}
     )
  }

  registeruser(){
    return this.userservice.registerUser(this.user).subscribe(
      (response)=>{
         console.log(this.user)
      }
    )
  }
}
