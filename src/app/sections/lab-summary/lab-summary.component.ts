import { Component } from '@angular/core';
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { CardComponent } from '../../common/card/card.component';
import { AttachmentsComponent } from "../../shared/attachments/attachments.component";
@Component({
  selector: 'app-lab-summary',
  imports: [SmartTableComponent, CardComponent,  AttachmentsComponent],
  templateUrl: './lab-summary.component.html',
  styleUrl: './lab-summary.component.css'
})
export class LabSummaryComponent {
  appointments = [
    {
      date: '2025-01-15',
      doctor: 'Dr. James',
      department: 'Cardiology',
      status: 'Scheduled'
    },
    {
      date: '2025-02-10',
      doctor: 'Dr. Emily',
      department: 'Neurology',
      status: 'Completed'
    },
  ];
}
