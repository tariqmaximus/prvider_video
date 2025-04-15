import { Component, OnInit, Inject } from '@angular/core';
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { CardComponent } from '../../common/card/card.component';
import { AttachmentsComponent } from "../../shared/attachments/attachments.component";
import { PhrService } from '../../services/phr/phr.service';
import { LookupList, LOOKUP_LIST } from '../../app.config';
import { LogMessage } from '../../shared/config/models/audit/log-message';
import { FmEncountersPrintComponent } from '../../forms/fm-encounters-print/fm-encounters-print.component';
import { ModalService } from '../../common/modal/modal.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lab-summary',
  imports: [SmartTableComponent, CardComponent,  AttachmentsComponent, FormsModule],
  standalone: true,
  templateUrl: './lab-summary.component.html',
  styleUrl: './lab-summary.component.css'
})
export class LabSummaryComponent implements OnInit {
  orders: any;
  lstPHRLabOrderSummary: Array<any> = [];
  lstPHRLabAttachments: Array<any> = [];

  actionButtons = [
    {
      label: 'View',
      tooltip: ' Preview',
      action: () => this.openDynamicModel()
    }
  ];

  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList, private phrService : PhrService, private logMessage: LogMessage, private modalService: ModalService){}

  ngOnInit(): void {
    
      this.getPatientPHRLabOrderSummary();
  }

  openDynamicModel(){
    this.modalService.openDynamicModal(
      `Encounter Print Preview`, // Modal Title
      'close',
      'Print',
      FmEncountersPrintComponent
    );
  }

  getPatientPHRLabOrderSummary(){
    this.phrService.getPatientPHRLabOrderSummary(this.lookupList.patientInfo.patient_id).subscribe({
      next: (data: any) => {
        lstPHRLabOrderSummary: new Array();
        this.lstPHRLabOrderSummary = data as Array<any>;
        this.assignValues();
        if(this.lstPHRLabOrderSummary.length>0)
          this.getAttachments(this.lstPHRLabOrderSummary[0]);
      },
      error: (error: any) => {
        this.logMessage.log(error)
      }
    });
  }

  assignValues(){
    this.orders = this.lstPHRLabOrderSummary.map((item) => {
      return{
        date: item.order_date,
        provider: item.provider_name,
        location: item.name,
        lab: item.lab_name,
        status: item.status.charAt(0).toUpperCase() + item.status.slice(1).toLowerCase(),
      }
    })
  }
 //#region No files , Testable
  getAttachments(value:any){
    this.phrService.getLabAttachments(value.order_id).subscribe({
      next: (data: any) => {        
        // this.lstPHRLabAttachments = data as Array<any>;
        this.lstPHRLabAttachments = [
          { name: 'Hello.pdf', type: 'pdf' },
          { name: 'Image.jpg', type: 'jpg' },
          { name: 'Document.docx', type: 'doc' }
        ]
      },
      error: (error: any) => {
        this.logMessage.log(error)
      }
  });
  }
  //#endregion
}
