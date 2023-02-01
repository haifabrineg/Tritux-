import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.component.html',
  styleUrls: ['./forget-pwd.component.css']
})
export class ForgetPwdComponent implements OnInit {
  username : string="";
  constructor(private loginservice : LoginService , private tokenstorageservice:TokenStorageService) { }

  ngOnInit(): void {
  }

  demandToRestPassword(){
    console.log(this.username);
   return this.tokenstorageservice.demandToRestPassword(this.username).subscribe();
 }  
  

}
