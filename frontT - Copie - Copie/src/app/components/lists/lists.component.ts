import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { List } from 'src/app/models/List';
import { Sprint } from 'src/app/models/Sprint';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
idl!:number;
list!:List;
ids!:number;
sprint!:Sprint;
ListUpdate:List=new List;
NewCard:Card=new Card;
NewCardSprint:Card=new Card;

idList!:number
idsprint!:number

  constructor(private projectService : ProjectService) { }
lists!:List[];
Sprints!:Sprint[]
hidden:boolean=true;
  ngOnInit(): void {
    this.getlists()
    this.getSprints()
    this.list=new List()
    this.sprint=new Sprint()

  }
  click(id:number){
    console.log("click")
    this.hidden=!this.hidden
    this.idList=id;
  }
  clickSprint(id:number){
    console.log("click")
    this.hidden=!this.hidden
    this.idsprint=id;
  }
  saveCard(){
    return this.projectService.saveCard(this.idList,this.NewCard).subscribe(
    res=>{
      window.location.reload();

    })
  }
  getlists(){
    return  this.projectService.getLists(1).subscribe(
       response=>{
         this.lists=response;
             }
           );
     
   }
   getSprints(){
    return  this.projectService.getSprints(1).subscribe(
       response=>{
         this.Sprints=response;
             }
           );
     
   }
   deleteListe(id:number){
    console.error()
    return this.projectService.deleteList(id).subscribe(
     res=>{
      window.location.reload();

     }
      );
  }
  
  updateListe(id:number){
    return this.projectService.updateTablesList(id,this.ListUpdate).subscribe(
      res=>{
        window.location.reload();

      }
    )
  }

  deleteSprint(idsprint:number){
    console.error()
    return this.projectService.deleteSprint(idsprint).subscribe(
     res=>{
      window.location.reload();

     }
      );
  }

  saveCardSprint(){
    return this.projectService.saveCardSprint(this.idsprint,this.NewCardSprint).subscribe(
      res=>{
        window.location.reload();
  
      })
  }
}
