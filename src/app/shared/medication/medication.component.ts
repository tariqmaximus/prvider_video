import { Component } from '@angular/core';
import { CardComponent } from "../../common/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medication',
  standalone: true,
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css'],
  imports: [CommonModule, CardComponent]
})
export class MedicationComponent {
  activeTab: 'Ongoing' | 'Paused' = 'Ongoing';
  OngoingMedications = [

    { name: "Paracetamol", condition: "Fever" },
    { name: "Ibuprofen", condition: "Inflammation" },
    { name: "Amoxicillin", condition: "Bacterial Infection" },
    { name: "Paracetamol", condition: "Fever" },
    { name: "Ibuprofen", condition: "Inflammation" },
    { name: "Amoxicillin", condition: "Bacterial Infection" }
  ];
  
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
