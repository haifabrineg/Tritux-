import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenStorageService } from 'src/app/services/token-storage-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() idProject!:number

  constructor(private projectService:ProjectService , private tokenservice:TokenStorageService , private router:Router) { }
ProjectList!:Project[];

project!:Project
  ngOnInit(): void {
    this.getProjects()
    
  }
  click(project:Project){
    this.idProject=project.id;
 
    this.router.navigate(['/Tables'])

   } 
getProjects(){
return this.projectService.getProjects("foufa").subscribe(
  res=>{
    this.ProjectList=res;
  }
)
}

}
