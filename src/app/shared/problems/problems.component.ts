import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { LookupList, LOOKUP_LIST } from '../../app.config';

@Component({
  selector: 'app-problems',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {
  activeTab: 'active' | 'Resolved' | 'all' = 'active';
  ptProblems: any;
  activeProblems: any;
  problemsLoaded: boolean = false;

  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList) { }

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.lookupList?.PatientProblems) {
        clearInterval(interval);
        this.getPatientProblems();
      }
    }, 100);
  }


  getPatientProblems() {
    this.ptProblems = this.lookupList.PatientProblems;
    this.activeProblems = this.ptProblems.map((problem: any) => {
      return {
        code: problem.prob_code,
        details: problem.prob_description,
        type: problem.prob_condition,
        date: problem.prob_date
      }
    })
  }

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
