import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  ngOnInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Station 1', " " ,'Station 2', " " ,'Station  3', " " ,'Station  4'," " , 'Station 5'],
        datasets: [{
          label: '# of Votes',
          data: [250," " , 300, " " ,200, " " ,150," " , 100],
          borderWidth: 1,
          barThickness : 20,
          backgroundColor: 'rgb(231, 107, 69)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  
}
