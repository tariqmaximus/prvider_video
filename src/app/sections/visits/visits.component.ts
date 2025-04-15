import { Component } from '@angular/core';
import { AppointmentsComponent } from "../../shared/appointments/appointments.component";
import { EncountersComponent } from "../../shared/encounters/encounters.component";
import { DoctorsComponent } from "../../shared/doctors/doctors.component";
import { ModalComponent } from "../../common/modal/modal.component";




@Component({
  selector: 'app-visits',
  imports: [AppointmentsComponent, EncountersComponent, DoctorsComponent, ModalComponent],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css'
})
export class VisitsComponent {





}
