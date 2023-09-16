import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightChartComponent } from './right-chart.component';

describe('RightChartComponent', () => {
  let component: RightChartComponent;
  let fixture: ComponentFixture<RightChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightChartComponent]
    });
    fixture = TestBed.createComponent(RightChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
