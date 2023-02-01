import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-to-do-card',
  templateUrl: './to-do-card.component.html',
  styleUrls: ['./to-do-card.component.css']
})
export class ToDoCardComponent implements OnInit {
  @Input()cardToDo!: Card ;

  constructor() { }

  ngOnInit(): void {
  }

}
