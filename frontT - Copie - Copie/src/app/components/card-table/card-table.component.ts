import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
test:string="test";
  @Input()card!: Card ;
  constructor(private projectService : ProjectService) { 
  }

  ngOnInit(): void {
  }






}
