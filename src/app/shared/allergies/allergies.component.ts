import { Component, Inject, OnInit } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { CommonModule } from '@angular/common';
import { LookupList, LOOKUP_LIST } from '../../app.config';

@Component({
  selector: 'app-allergies',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {
  activeTab: 'active' | 'Resolved' = 'active';
  ptAllergies: any;
  activeAllergies: any;
  allergiesLoaded: boolean = false;

  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList) { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.lookupList?.patientAllergies) {
        clearInterval(interval);
        this.getPatientAllergies();
      }
    }, 100);
  }



  getPatientAllergies() {
    this.ptAllergies = this.lookupList.patientAllergies;
    this.activeAllergies = this.ptAllergies.map((allergy: any) => {
      return {
        name: allergy.description,
        severity: allergy.severity.toLowerCase()
      }
    })
  }


  ResolvedAllergies = [
    { name: "Bee Stings", severity: "fatal" },
    { name: "Eggs", severity: "unknown" },
    { name: "Milk", severity: "mild" },
    { name: "Milk", severity: "moderate" },
  ];

  headerButtons = [
    {
      label: 'Active',
      icon: 'icon-allergy',
      targetId: 'active',
      action: () => this.setActiveTab('active')
    },
    {
      label: 'Resolved',
      icon: 'icon-checkin',
      targetId: 'Resolved',
      action: () => this.setActiveTab('Resolved')
    }
  ];

  setActiveTab(tab: 'active' | 'Resolved') {
    this.activeTab = tab;
  }

  getSeverityClass(severity: string): string {
    switch (severity) {
      case 'mild':
        return 'success';
      case 'unknown':
        return 'danger';
      case 'fatal':
        return 'info';
      case 'moderate':
        return 'warning';
      default:
        return '';
    }
  }

}
