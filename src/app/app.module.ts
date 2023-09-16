import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';
import { RightChartComponent } from './components/right-chart/right-chart.component';

@NgModule({
  declarations: [
    AppComponent,

    ChartComponent,
     RightChartComponent
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
