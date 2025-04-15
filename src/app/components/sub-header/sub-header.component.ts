import { Component, Inject, OnInit } from '@angular/core';
import { LookupList, LOOKUP_LIST } from '../../app.config';
import { ChartComponent } from "../../common/chart/chart.component";



@Component({
  selector: 'app-sub-header',

  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.css',
  imports: [ChartComponent]
})
export class SubHeaderComponent implements OnInit {

  pat_name:string='';
  pat_id: string = ''
  pat_age:string='';
  pat_gender:string='';
  pat_dob:string='';
  pat_contact: string = '';
  patient_address:string='';
  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList) { }

  ngOnInit(): void {
    this.assignValues();
  }

  assignValues(){
    this.pat_name = this.lookupList.patientInfo.last_name + ", " + this.lookupList.patientInfo.first_name;
    this.pat_age = this.lookupList.patientInfo.age_year + "y " + this.lookupList.patientInfo.age_month + "m " + this.lookupList.patientInfo.age_days + "d";
    this.pat_id = this.lookupList.patientInfo.pid;
    this.pat_contact = this.lookupList.patientInfo.primary_contact_no;
    if (this.lookupList.patientInfo.gender_code == 'M') {
      this.pat_gender = "MALE";
    } else if (this.lookupList.patientInfo.gender_code == 'F') {
      this.pat_gender = "FEMALE";
    }
    this.pat_dob = this.lookupList.patientInfo.dob;
    this.patient_address = this.lookupList.patientInfo.address;
  }
}
