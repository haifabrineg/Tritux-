import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  form: any = {};
  confirmationToken:any;
  private readonly CONFIRMATION_TOKEN = 'CONFIRMATION_TOKEN';

  username:string="";
  params:any
  constructor(private tokenstorageservice:TokenStorageService
   ,    private _routes:ActivatedRoute,
   ) { }

  ngOnInit(): void {
    this.confirmationToken=+this._routes.params.subscribe(params => {
     
      this.confirmationToken=params['token']
      localStorage.setItem(this.CONFIRMATION_TOKEN, this.confirmationToken);

      console.log("tokent",localStorage.getItem(this.CONFIRMATION_TOKEN))//log the entire params object
    });

  }
  

    resetPassword(){
      console.log("params"+this.params)//log the entire params object

      console.log("reset "+this.CONFIRMATION_TOKEN)
      const confirmation  =localStorage.getItem(this.CONFIRMATION_TOKEN);
      return this.tokenstorageservice.resetPassword(this.form.new,this.form.confirm,<string>confirmation).subscribe(
        data => {
           
          console.log(this.CONFIRMATION_TOKEN)//log the entire params object
          console.log('this.token ='+confirmation)}
      );
    }
             
  }


  

