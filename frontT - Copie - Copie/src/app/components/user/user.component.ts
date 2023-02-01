import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user1:User
  constructor() { 
    this.user1=new User()
  }

  ngOnInit(): void {
    console.log("user:"+this.user1)
  }

}
