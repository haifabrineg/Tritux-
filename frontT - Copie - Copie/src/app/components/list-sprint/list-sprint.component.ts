import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-list-sprint',
  templateUrl: './list-sprint.component.html',
  styleUrls: ['./list-sprint.component.css']
})
export class ListSprintComponent implements OnInit {
  CardsS:Card[]=[];
  cardS!:Card;
  @Input() ids!:number;

  constructor(private projectService : ProjectService) { }

  ngOnInit(): void {
    this.getCards()
  }


  getCards(){
    return  this.projectService.getCardSprint(this.ids).subscribe(
       response=>{
         this.CardsS=response;
         console.log(response)
             }
           );
     
   }
   drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      let i = event.currentIndex;
      let list=event.container.data;
      let cardUpdate = list[i] as Card;
      cardUpdate.ids=this.ids;
       this.projectService.updateSprint(this.ids,cardUpdate).subscribe(
         console.error
       );
    }
  }

}
