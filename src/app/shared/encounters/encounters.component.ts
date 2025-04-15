import { Component, Inject, OnInit } from '@angular/core';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ModalService } from '../../common/modal/modal.service';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { FmFilePreviewComponent } from '../../forms/fm-file-preview/fm-file-preview.component';
import { FmEncountersPrintComponent } from '../../forms/fm-encounters-print/fm-encounters-print.component';
import { LookupList, LOOKUP_LIST } from '../../app.config';
import { SearchCriteria } from '../../common/search-criteria';
import { GeneralService } from '../../services/general/general.service';
import { LogMessage } from '../config/models/audit/log-message';
import { DateModel } from '../config/models/date-model';

@Component({
  selector: 'app-encounters',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent],
  templateUrl: './encounters.component.html',
  styleUrl: './encounters.component.css'
})
export class EncountersComponent implements OnInit {
  lstPHREncounterSummary: any[] = [];
  date: string = '';
  headerButtons: any[] = [];

  constructor(private modalService: ModalService, @Inject(LOOKUP_LIST) public lookupList: LookupList, private generalService: GeneralService, private logMessage: LogMessage) { }

  ngOnInit(): void {
    this.getPHREncounterSummary();
    this.getDate();
    this.setHeaderButtons();
  }


  getPHREncounterSummary() {
    let reportSearchCriteria: SearchCriteria = new SearchCriteria();
    reportSearchCriteria.param_list = [];
    reportSearchCriteria.param_list.push({ name: "patient_id", value: this.lookupList.patientInfo.patient_id, option: "" });
    this.generalService.getPHREncounterSummary(reportSearchCriteria).subscribe({
      next: (data: any) => {
        this.lstPHREncounterSummary = data as Array<any>;
      },
      error: (error: any) => {
        this.logMessage.log("getPHREncounterSummary " + error);
      }
    });
  }

  getDate(dateRange?: { startDate: string, endDate: string }) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
  
    if (dateRange) {
      const [fromMonth, fromDay, fromYear] = dateRange.startDate.split('/');
      const [toMonth, toDay, toYear] = dateRange.endDate.split('/');
  
      this.date = `${fromDay} ${monthNames[+fromMonth - 1].substring(0, 3)} ${fromYear} To ${toDay} ${monthNames[+toMonth - 1].substring(0, 3)} ${toYear}`;
    } else {
      const today = new Date();
      const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
      const formattedDate = today.toLocaleDateString('en-GB', options);
      this.date = `${formattedDate} To ${formattedDate}`;
    }
  
    this.setHeaderButtons();
  }
  

  setHeaderButtons() {
    this.headerButtons = [
      {
        label: this.date,
        icon: 'icon-calendar',
        targetId: 'DateRangePicker',
        action: () => this.onDateRangeClick()
      }
    ];
  }


  onDateRangeClick() {
    this.modalService.openDynamicModal(
      'Select Date Range',
      'Apply',
      'DateRangePicker',
      DateRangePickerComponent,
      (dateRange) => {
        this.getDate(dateRange);
        this.filterEncounters(dateRange);
      });
  }

  filterEncounters(dateRange: { startDate: DateModel, endDate: DateModel }) {
    let reportSearchCriteria: SearchCriteria = new SearchCriteria();
    reportSearchCriteria.param_list = [];
    reportSearchCriteria.param_list.push({ name: "patient_id", value: this.lookupList.patientInfo.patient_id, option: "" });
    reportSearchCriteria.param_list.push({ name: "date_from", value: dateRange.startDate.toString(), option: "" });
    reportSearchCriteria.param_list.push({ name: "date_to", value: dateRange.endDate.toString(), option: "" });
    this.generalService.getPHREncounterSummary(reportSearchCriteria).subscribe({
      next: (data: any) => {
        this.lstPHREncounterSummary =  data as Array<any>;
      },
      error:(error: any) => {
        this.logMessage.log("getPHREncounterSummary " + error);
      }
  });
  }

  onGenrateCCD() {
    this.modalService.openDynamicModal(
      `Genrate CCD`, // Modal Title
      'Apply',
      'Genrate CCD',
      FmFilePreviewComponent
    );
  }
  onEncounterPrint() {
    this.modalService.openDynamicModal(
      `Encounter Print Preview`, // Modal Title
      'close',
      'Print',
      FmEncountersPrintComponent
    );
  }
  actionButtons = [
    {
      label: 'Preview',
      tooltip: ' Preview',
      action: () => this.onEncounterPrint()

    },
    {
      label: 'Generate CCD',
      tooltip: ' Generate CCD ',
      className: 'active',
      action: () => this.onGenrateCCD()
    },

  ];
}
