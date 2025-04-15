import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ChartComponent } from "../../common/chart/chart.component";

@Component({
  selector: 'app-vitals',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent, ChartComponent],
  templateUrl: './vitals.component.html',
  styleUrl: './vitals.component.css'
})
export class VitalsComponent {
  activeTab: 'table' | 'chart' = 'chart'; // ✅ Chart is default

  vitals = [
    { date: '2025-01-01', weight: '72', height: '170', bp: '118/78', bmi: 23.5, temperature: '98.5' },
    { date: '2025-01-05', weight: '71.8', height: '170', bp: '122/80', bmi: 23.4, temperature: '98.6' },
    { date: '2025-01-10', weight: '71.5', height: '170', bp: '120/80', bmi: 23.3, temperature: '98.6' },
    { date: '2025-01-15', weight: '71.3', height: '170', bp: '130/85', bmi: 23.2, temperature: '99.1' },
    { date: '2025-01-20', weight: '71', height: '170', bp: '125/82', bmi: 23.1, temperature: '98.9' },
    { date: '2025-01-25', weight: '70.8', height: '170', bp: '128/84', bmi: 23.0, temperature: '99.2' },
    { date: '2025-01-30', weight: '70.5', height: '170', bp: '118/76', bmi: 22.9, temperature: '98.4' },
   
  ];

  chartTabs = [
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
