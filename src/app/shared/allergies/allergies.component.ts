import { Component } from '@angular/core';
import { CardComponent } from '../../common/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-allergies',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent {
  activeTab: 'active' | 'Resolved' = 'active';

  activeAllergies = [
    { name: "Bee Stings", severity: "fatal" },
    { name: "Eggs", severity: "unknown" },
    { name: "Milk", severity: "mild" },
    { name: "Milk", severity: "moderate" },
  ];

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
