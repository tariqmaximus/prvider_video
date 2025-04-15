import { Component } from '@angular/core';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ModalService } from '../../common/modal/modal.service';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { FmFilePreviewComponent } from '../../forms/fm-file-preview/fm-file-preview.component';
import { FmEncountersPrintComponent } from '../../forms/fm-encounters-print/fm-encounters-print.component';

@Component({
  selector: 'app-encounters',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent],
  templateUrl: './encounters.component.html',
  styleUrl: './encounters.component.css'
})
export class EncountersComponent  {
  encounters = [
    {
      date: '2025-01-15',
      profilePicture: 'assets/dp1.jpg',
      name: 'Jason',
      special: 'Heart',
      department: 'Cardiology',
      location: 'City Hospital',
      visitReason: 'Routine Checkup',
      diagnosis: 'Hypertension',
    },
    {
      date: '2025-02-10',
      profilePicture: 'assets/dp2.jpg',
      name: 'Emily',
      special: 'Brain',
      department: 'Neurology',
      location: 'General Hospital',
      visitReason: 'Migraine Consultation',
      diagnosis: 'Chronic Migraine',
    },
    {
      date: '2025-02-25',
      profilePicture: 'assets/dp3.jpg',
      name: 'Michael',
      special: 'Ortho',
      department: 'Orthopedics',
      location: 'Sunrise Clinic',
      visitReason: 'Knee Pain',
      diagnosis: 'Osteoarthritis',
    },
    {
      date: '2025-03-02',
      profilePicture: 'assets/dp4.jpg',
      name: 'Sophia',
      special: 'Lungs',
      department: 'Pulmonology',
      location: 'Central Hospital',
      visitReason: 'Shortness of Breath',
      diagnosis: 'Asthma',
    },
    {
      date: '2025-03-05',
      profilePicture: 'assets/dp5.jpg',
      name: 'Daniel',
      special: 'Eye',
      department: 'Ophthalmology',
      location: 'Vision Care Center',
      visitReason: 'Blurry Vision',
      diagnosis: 'Myopia',
    },
    {
      date: '2025-03-10',
      profilePicture: 'assets/dp6.jpg',
      name: 'Olivia',
      special: 'Skin',
      department: 'Dermatology',
      location: 'SkinCare Clinic',
      visitReason: 'Rashes on Arms',
      diagnosis: 'Eczema',
    },
    {
      date: '2025-03-15',
      profilePicture: 'assets/dp7.jpg',
      name: 'William',
      special: 'Digestive',
      department: 'Gastroenterology',
      location: 'City Medical Center',
      visitReason: 'Stomach Pain',
      diagnosis: 'Gastritis',
    },
    {
      date: '2025-03-20',
      profilePicture: 'assets/dp8.jpg',
      name: 'Ava',
      special: 'Kidney',
      department: 'Nephrology',
      location: 'Green Valley Hospital',
      visitReason: 'Frequent Urination',
      diagnosis: 'Kidney Stones',
    },
    {
      date: '2025-03-25',
      profilePicture: 'assets/dp9.jpg',
      name: 'James',
      special: 'Mental Health',
      department: 'Psychiatry',
      location: 'Wellness Center',
      visitReason: 'Anxiety Issues',
      diagnosis: 'Generalized Anxiety Disorder',
    },
    {
      date: '2025-03-30',
      profilePicture: 'assets/dp10.jpg',
      name: 'Charlotte',
      special: 'Ear',
      department: 'ENT',
      location: 'Hearing Care Clinic',
      visitReason: 'Ear Infection',
      diagnosis: 'Otitis Media',
    }
  ];

  constructor(private modalService: ModalService) {}

  onDateRangeClick() {
    this.modalService.openDynamicModal(
      'Select Date Range', // Modal Title
      'Apply',            // Save Button Label
      'DateRangePicker',  // Modal ID
      DateRangePickerComponent // Component to load inside modal
    );
  }

  headerButtons = [
    { 
      label: '24 feb 2025 To 29 feb 2025', 
      icon: 'icon-calendar', 
      targetId: 'DateRangePicker', 
      action: () => this.onDateRangeClick() 
    }
  ];

  
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
      { label: 'Generate CCD',
        tooltip: ' Generate CCD ',
        className: 'active',
        action: () => this.onGenrateCCD()
      },
      
  ];
}
