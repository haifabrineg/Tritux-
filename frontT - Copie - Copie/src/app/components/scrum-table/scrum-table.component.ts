import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/List';
import { Sprint } from 'src/app/models/Sprint';
import { table } from 'src/app/models/Table';
import { BoardService } from 'src/app/services/board.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-scrum-table',
  templateUrl: './scrum-table.component.html',
  styleUrls: ['./scrum-table.component.css']
})
export class ScrumTableComponent implements OnInit {
hidden:boolean=true;
  constructor(private service:BoardService, private projectService:ProjectService,private router: Router) { }
NewList:List=new List;
NewSprint:Sprint=new Sprint;
selectedOption!:string;

  ngOnInit(): void {
  }

  click(){
    this.hidden=!this.hidden
  }


 saveList(){
    return this.projectService.saveList(1,this.NewList).subscribe(
      res=>{
        window.location.reload();

      }
    )
 }
saveSprint(){
  this.NewSprint.idTable=1;
  return this.projectService.saveSprint(this.NewSprint).subscribe(
    res=>{
      window.location.reload();
    }
  )
}


Listcheck(){
  return this.selectedOption=="List";
}
Sprintcheck(){
  return this.selectedOption=="Sprint";
}

}
