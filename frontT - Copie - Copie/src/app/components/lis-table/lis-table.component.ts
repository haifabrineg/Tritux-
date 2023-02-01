import { Component, Input, OnInit, Output } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Card } from 'src/app/models/Card';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-lis-table',
  templateUrl: './lis-table.component.html',
  styleUrls: ['./lis-table.component.css']
})
export class LisTableComponent implements OnInit {
@Input() idl!:number;
Cards:Card[]=[];
card!:Card;
NewCard:Card=new Card;
hidden:Boolean=true;
  constructor(private projectService : ProjectService) { 

  }

  ngOnInit(): void {
        this.getCards();
        console.log(this.idl)
  }
  

saveCard(){
  return this.projectService.saveCard(this.idl,this.NewCard).subscribe(
    res=>{}
  )
}

  getCards(){
   return  this.projectService.getCards(this.idl).subscribe(
      response=>{
        this.Cards=response;
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
      cardUpdate.idL=this.idl;
       this.projectService.updateList(this.idl,cardUpdate).subscribe(
         console.error
       );
    }
  }


}
