import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private ProjectService:ProjectService) { }
  labels!:string[]
  data!:number[]
  ngOnInit(): void {
 this.ProjectService.getCharts().subscribe(
  res=>{this.labels=res
  console.log(res)}
 )
 this.ProjectService.getChartsdata().subscribe(
  res=>{this.data=res
  console.log(this.data)
  var myChart = new Chart("myChart", {
    type: 'bar',
    data: {
      labels:this.labels,
      datasets: [{
        label: '# of points',
        data: this.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });}
 )
   
 

  
 
  }

}
