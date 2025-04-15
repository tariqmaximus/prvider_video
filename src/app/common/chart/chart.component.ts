import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  @Input() tabs: any[] = [];
  activeTab: any;
  chartOptions: any;
  tabColors: { [key: string]: string } = {};

  ngOnInit() {
    if (this.tabs.length > 0) {
      this.activeTab = this.tabs[0];
      setTimeout(() => {
        this.chartOptions = this.getChartOptions(this.activeTab);
        this.initializeTabColors();
      });
    }
  }
  

  // Initialize tab colors based on the latest value
  initializeTabColors() {
    this.tabs.forEach(tab => {
      this.tabColors[tab.name] = this.getButtonColor(tab);
    });
  }

  // Method to switch between tabs
  selectTab(tab: any) {
    this.activeTab = tab;
    this.chartOptions = this.getChartOptions(tab);
  }

  // Generate chart options dynamically
  getChartOptions(selectedTab: any) {
    return {
      animationEnabled: true,
      theme: 'light2',
      backgroundColor: 'transparent',
      axisX: { valueFormatString: 'D' },
      height: 260,
      data: [
        {
          type: 'line',
          color: selectedTab.color,
          showInLegend: true,
          name: selectedTab.name,
          dataPoints: selectedTab.data
        }
      ]
    };
  }

  // Assign button color based on the latest value
  getButtonColor(tab: any): string {
    const lastValue = tab.data[tab.data.length - 1]?.y;
    if (lastValue >= 120) return 'danger';
    if (lastValue >= 100) return 'normal';
    return 'low';
  }

  // Get the latest value of the dataset
  getLatestValue(tab: any): number {
    return tab.data[0]?.y;
  }
  
}
