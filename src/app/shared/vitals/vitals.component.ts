import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ChartComponent } from "../../common/chart/chart.component";
import { LookupList, LOOKUP_LIST } from '../../app.config';

@Component({
  selector: 'app-vitals',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent, ChartComponent],
  templateUrl: './vitals.component.html',
  styleUrl: './vitals.component.css'
})

export class VitalsComponent implements OnInit {
  
  activeTab: 'table' | 'chart' = 'chart'; // ✅ Chart is default
  vitals: any[] = [];
  chartTabs: any[] = [];
  vitalsLoaded = false;

  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.lookupList?.patientVitals) {
        clearInterval(interval);
        this.getPatientVitals();
      }
    }, 100);
  }

  getPatientVitals(){
    const pv = this.lookupList?.patientVitals;
      this.vitals = [
        {
          date: this.formateDate(pv.visit_date),
          weight: pv.weight,
          height: pv.height,
          bp: pv.bp,
          bmi: pv.bmi,
          temperature: pv.temprature,
        },
      ];

    this.chartTabs = [
      {
        name: 'Weight (kg)',
        color: '#66cc99',
        data: this.vitals.map((vital) => ({ x: new Date(vital.date), y: parseFloat(vital.weight) })),
      },
      {
        name: 'Height (cm)',
        color: '#3399ff',
        data: this.vitals.map((vital) => ({ x: new Date(vital.date), y: parseFloat(vital.height) })),
      },
      {
        name: 'BP (Systolic)',
        color: '#ff6347',
        data: this.vitals.map((vital) => ({ x: new Date(vital.date), y: parseInt(vital.bp.split('/')[0]) })),
      },
  
      {
        name: 'BMI',
        color: '#27b5d1',
        data: this.vitals.map((vital) => ({ x: new Date(vital.date), y: vital.bmi })),
      },
      {
        name: 'Temp (°F)',
        color: '#008080',
        data: this.vitals.map((vital) => ({ x: new Date(vital.date), y: parseFloat(vital.temperature) })),
      },
    ];

    this.vitals = [...this.vitals];
    this.chartTabs = [...this.chartTabs];
    
  }

  formateDate(date: any): string{
    const Date = date.split(' ')[0].split('/').reverse().join('-');
    return Date;
  }

  headerButtons = [
    {
      label: '',
      icon: 'icon-chart-fill',
      targetId: 'chart',
      action: () => this.setActiveTab('chart')
    },
    {
      label: '',
      icon: 'icon-table',
      targetId: 'table',
      action: () => this.setActiveTab('table')
    },
  ];

  setActiveTab(tab: 'table' | 'chart') {
    this.activeTab = tab;
  }
}
