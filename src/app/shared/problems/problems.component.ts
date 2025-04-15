import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent {
  activeTab: 'active' | 'Resolved' | 'all' = 'active';

  activeProblems = [
    { code: "TF.09", details: "High fever with chills", type: "mild", date: "12/4/2024" },
    { code: "AB.12", details: "Persistent dry cough", type: "moderate", date: "15/4/2024" },
    { code: "XY.23", details: "Shortness of breath while walking", type: "fatal", date: "17/4/2024" },
    { code: "MN.45", details: "Chest pain after exertion", type: "unknown", date: "18/4/2024" },
    { code: "KL.67", details: "Frequent dizziness and lightheadedness",type: "normal", date: "20/4/2024" },
    { code: "PQ.89", details: "Nausea after eating", type: "normal", date: "22/4/2024" }
  ];
  
  resolvedProblems = [
    { code: "TF.09", details: "Mild headache, relieved with rest", date: "11/4/2024" },
    { code: "AB.12", details: "Sore throat, improved after medication", date: "10/4/2024" },
    { code: "XY.23", details: "Fatigue due to dehydration, now resolved", date: "9/4/2024" },
    { code: "MN.45", details: "Muscle pain post-exercise, recovered", date: "8/4/2024" },
    { code: "KL.67", details: "Mild allergic reaction, treated successfully", date: "7/4/2024" },
    { code: "PQ.89", details: "Joint pain from cold weather, resolved", date: "6/4/2024" }
  ];

  headerButtons = [
 
    {
      label: 'Active',
      icon: 'icon-warning',
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

  get allProblems() {
    return [...this.activeProblems, ...this.resolvedProblems].sort(() => Math.random() - 0.5);
  }

  setActiveTab(tab: 'active' | 'Resolved' | 'all') {
    this.activeTab = tab;
  }
}
