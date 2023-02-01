import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean=false;
  username:string ="";
  constructor(private router : Router ,private TokenService:TokenStorageService){}
   ngOnInit(): void {
     this.username=this.TokenService.loggedUser
     console.log(this.username)
     console.log(this.username)

   }
  

    redirect(){
    this.router.navigate(['/sign-in'])
  }

}
