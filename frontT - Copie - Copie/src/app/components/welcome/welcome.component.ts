import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { ProjectService } from 'src/app/services/project.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
today!:string
 monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  constructor(private projectService:ProjectService, private tokenService:TokenStorageService) { }
username:string="";
todo!:Card[]
cardToDo!:Card;
  ngOnInit(): void {
   this.today=new Date().getDay()+" "+this.monthNames[new Date().getMonth()]+" "+new Date().getFullYear()
    console.log(this.username)
    this.getToDo()
    console.log(this.todo)
    console.log(this.cardToDo)
  }
getToDo(){
return this.projectService.getToDo(this.tokenService.getUsername()).subscribe(
  res=>{

    this.todo=res
    console.log(res)
    this.username=this.tokenService.getUsername()
  }
)
}

}
