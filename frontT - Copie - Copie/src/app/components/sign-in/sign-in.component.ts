import { Component, EventEmitter, Input, ModuleWithProviders, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';
import { Router } from '@angular/router';
import { concat, ConnectableObservable } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user:any;
  form: any = {};
  @Output() isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
roles=[];
list=[];
  constructor(private authService: TokenStorageService, private userservice: UserService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn)
    if (this.authService.getJwtToken()) {
      this.isLoggedIn = true;
      console.log(this.roles+"roles")
    }
    
   
  }



  onSubmit() {

    this.authService.login(this.form).subscribe(
      success => {
        
        if (success) {
          console.log("rrrt"+this.authService.roles)
          this.isLoggedIn = true;
 
        this.router.navigate(['/welcome'])
        
         
      }},
      err => {

        this.isLoginFailed = true;
        this.router.navigate(['/sign-in'])
        
      }
    );
  }
  reloadPage() {
   
  }
  ForgotPwd(){
    this.router.navigate(['/reset-password'])
  }

  
}


