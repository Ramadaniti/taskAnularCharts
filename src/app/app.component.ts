import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-charts';
  isList : boolean = false
  ngOnInit(): void {
    
  
  }

  listOrGraph(val : boolean){
   this.isList = !val
  }

}
