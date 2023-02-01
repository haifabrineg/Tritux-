import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { table } from 'src/app/models/Table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input()table!: table ;
 
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  loadscrumTable(){
    this.router.navigate(['/scrumTable'])
  }
}
