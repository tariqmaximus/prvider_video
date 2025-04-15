import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { CardComponent } from "../../common/card/card.component";
import { CommonModule } from '@angular/common';
import { LookupList, LOOKUP_LIST } from '../../app.config';

@Component({
  selector: 'app-medication',
  standalone: true,
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css'],
  imports: [CommonModule, CardComponent]
})
export class MedicationComponent implements OnInit {
  activeTab: 'Ongoing' | 'Paused' = 'Ongoing';
  ptMedications: any;
  OngoingMedications: any;
  medicationsLoaded: boolean = false;

  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList) { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.lookupList?.patientMedication) {
        clearInterval(interval);
        this.getPatientMedication();
      }
    }, 100);
  }



  getPatientMedication() {
    this.ptMedications = this.lookupList.patientMedication;
    this.OngoingMedications = this.ptMedications.map((medication: any) => {
      return {
        info: medication.drug_info,
        date: medication.start_date,
        sig_text: medication.sig_text
      }
    })
  }


  PausedMedications = [
    { name: "Cetirizine", condition: "Allergies" },
    { name: "Metformin", condition: "Diabetes" },
    { name: "Aspirin", condition: "Pain Relief" },
    { name: "Cetirizine", condition: "Allergies" },
    { name: "Metformin", condition: "Diabetes" },
    { name: "Aspirin", condition: "Pain Relief" }
  ];

  headerButtons = [
    {
      label: 'Ongoing',
      icon: 'icon-medical',
      targetId: 'active',
      action: () => this.setActiveTab('Ongoing')
    },
    {
      label: 'Paused',
      icon: 'icon-pause',
      targetId: 'Paused ',
      action: () => this.setActiveTab('Paused')
    }

  ];

  setActiveTab(tab: 'Ongoing' | 'Paused') {
    this.activeTab = tab;
  }
}
