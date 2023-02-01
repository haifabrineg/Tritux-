import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { env } from '../env/env';
import { Card } from '../models/Card';
import { Charts } from '../models/Charts';
import { List } from '../models/List';
import { Project } from '../models/Project';
import { Sprint } from '../models/Sprint';
import { table } from '../models/Table';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }



  getLists(idt:number){
    return this.http.get<List[]>(env.baseUrl+env.getLists+idt) 
  }

  getCards(idl:number){
    return this.http.get<Card[]>(env.baseUrl+env.getCards+idl) 
  }
  
  getTables(idp:number){
    return this.http.get<table[]>(env.baseUrl+env.getTables+idp) 
  }

  updateList(id:number,l:Card){
    console.log("service")
    console.log(l)
    return this.http.post(env.baseUrl+env.updateList+id,l);
  }

  saveList(idt:number,l:List){
    return this.http.post(env.baseUrl+env.saveList+idt,l);
  }
  saveCard(idl:number,l:Card){
    return this.http.post(env.baseUrl+env.saveCard+idl+env.savveCard,l);
  }

  deleteList(idl:number){
    console.log("service")
    return this.http.delete(env.baseUrl+env.deleteList+idl);
  }

  updateTablesList(idl:number,list:List){
    return this.http.post(env.baseUrl+env.updateTable+idl,list)
  }

  getToDo(username:string){
    return this.http.get<Card[]>(env.baseUrl+env.getToDo+username)
  }

  saveSprint(Sprint:Sprint){
    return this.http.post(env.baseUrl+env.saveSprint+Sprint.idTable,Sprint)
  }
  getSprints(idTable:number){
    return this.http.get<Sprint[]>(env.baseUrl+env.getsprints+idTable)
  }
  deleteSprint(idsprint:number){
    return this.http.delete(env.baseUrl+env.deleteSprint+idsprint)
  }
  saveCardSprint(idsprint : number ,CardSprint:Card){
    return this.http.post(env.baseUrl+env.saveCardSprint+idsprint,CardSprint)
  }

  getCardSprint(idSprint:number){
    return this.http.get<Card[]>(env.baseUrl+env.getcardsSprint+idSprint)
  }
  updateSprint(ids:number,card:Card){
    return this.http.post(env.baseUrl+env.updateSprint+ids,card)
  }

  getProjects(username:string){
    return this.http.get<Project[]>(env.baseUrl+env.getProjects+username)
  }
  getCharts(){
    return this.http.get<string[]>(env.baseUrl+env.charts+"/labels")
  }
  getChartsdata(){
    return this.http.get<number[]>(env.baseUrl+env.charts+"/data")
  }
}
