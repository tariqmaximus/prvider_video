import { Component } from '@angular/core';

import { ChartComponent } from "../../common/chart/chart.component";



@Component({
  selector: 'app-sub-header',

  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css',
  imports: [  ChartComponent]
})
export class SubHeaderComponent {

}
