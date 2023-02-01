import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-card-sprint',
  templateUrl: './card-sprint.component.html',
  styleUrls: ['./card-sprint.component.css']
})
export class CardSprintComponent implements OnInit {
  @Input()cardS!: Card ;
  constructor() { }

  ngOnInit(): void {
  }

}
