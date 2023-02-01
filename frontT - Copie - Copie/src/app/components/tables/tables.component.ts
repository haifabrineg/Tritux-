import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { table } from 'src/app/models/Table';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
table!:table
 tables!:table[]
 id!:number
  
  constructor(private projectService:ProjectService,private router:Router) {
  }
  idProject!:number
  ngOnInit(): void {


       this.loadtables()
  
  }
  loadtables(){
    return this.projectService.getTables(1).subscribe(
      res=>{
      
       this.tables=res 
       console.log(this.tables)
      }
    )
  }
}
