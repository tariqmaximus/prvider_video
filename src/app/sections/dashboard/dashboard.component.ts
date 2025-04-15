import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";
import { AllergiesComponent } from "../../shared/allergies/allergies.component";
import { ProblemsComponent } from "../../shared/problems/problems.component";
import { MedicationComponent } from "../../shared/medication/medication.component";

import { VitalsComponent } from "../../shared/vitals/vitals.component";
import { AppointmentsComponent } from "../../shared/appointments/appointments.component";
import { DatePickerComponent } from "../../common/date-picker/date-picker.component";
import { CardComponent } from "../../common/card/card.component";

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
export class DashboardComponent {
 
  page = { title: 'Dashboard' }; // Default title
}
