import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env/env';
import { table } from '../models/Table';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private _http:HttpClient) { }

  getDataTable(idt:number){
    return this._http.get<table>(env.baseUrl+env.getDataTable+1);
  }
}
