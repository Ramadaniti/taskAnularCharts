import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-right-chart',
  templateUrl: './right-chart.component.html',
  styleUrls: ['./right-chart.component.scss']
})
export class RightChartComponent {
  ngOnInit() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    new Chart("myChart2", {
      type: 'radar',
      data: {
        labels: ["22 : 00", "22 : 00", "22 : 00", "22 : 00","22 : 00" , "22 : 00" , "22 : 00" ,"22 : 00"],
        datasets: [{
          label : '',
          fill: true,
          data: [150, 300, 200, 150, 100],
          borderWidth: 1,
       
        },
      {
        label : '',
        fill: true,
        data: [250, 200, 260, ,160, 150],
        borderWidth: 1,
      }
      ]
      },
      options: {
        
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  }
}
