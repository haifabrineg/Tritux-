import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { table } from 'src/app/models/Table';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.css']
})
export class TestTableComponent implements OnInit {
  list : table=new table;

  constructor(private service:BoardService , @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.getDatatable()
  }
getDatatable(){
  /*this.service.getDataTable(1).subscribe(
 response=>{
this.list=response; 
 });*/}

}
