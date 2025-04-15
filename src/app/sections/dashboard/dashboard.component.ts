import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";
import { AllergiesComponent } from "../../shared/allergies/allergies.component";
import { ProblemsComponent } from "../../shared/problems/problems.component";
import { MedicationComponent } from "../../shared/medication/medication.component";

import { VitalsComponent } from "../../shared/vitals/vitals.component";
import { AppointmentsComponent } from "../../shared/appointments/appointments.component";
import { DatePickerComponent } from "../../common/date-picker/date-picker.component";
import { CardComponent } from "../../common/card/card.component";
import { LookupList, LOOKUP_LIST } from '../../app.config';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    VitalsComponent,
    CommonModule,
    ProfileCardComponent,
    AllergiesComponent,
    ProblemsComponent,
    MedicationComponent,
    AppointmentsComponent,
    DatePickerComponent,
    CardComponent
],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList){}

  pat_name:string='';
  pat_id: string = ''
  pat_age:string='';
  pat_gender:string='';
  pat_dob:string='';
  pat_contact: string = '';
  patient_address:string='';
  patient_city:string='';
  patient_state:string='';
  patient_zip:string='';

  info_practice_name:string='';
  info_practice_address:string='';
  info_practice_contact:string='';
  primary_ins: string = '';
  secondary_ins: string = '';

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
    this.patient_city = this.lookupList.patientInfo.city;
    this.patient_state = this.lookupList.patientInfo.state;
    this.patient_zip = this.lookupList.patientInfo.zip;
  }

  assignValuesToPractice() {
    this.info_practice_name = this.lookupList.practiceInfo.practiceName;
    this.info_practice_address = this.lookupList.practiceInfo.address1 + " " + this.lookupList.practiceInfo.zip + " " + this.lookupList.practiceInfo.city + " " + this.lookupList.practiceInfo.state;
    this.info_practice_contact = this.lookupList.practiceInfo.phone;
    this.primary_ins = this.lookupList.insuranceInfo.primary;
    this.secondary_ins = this.lookupList.insuranceInfo.secondary;
  }
}
