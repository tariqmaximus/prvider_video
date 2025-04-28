import { Component } from '@angular/core';
import { DoctorRoomComponent } from "../../../rooms/docter-room/doctorRoom.component";
import { PatientRoomComponent } from "../../../rooms/patient-room/patient-room.component";

@Component({
  selector: 'app-patient-portal',
  imports: [DoctorRoomComponent, PatientRoomComponent],
  templateUrl: './patient-portal.component.html',
  styleUrl: './patient-portal.component.css'
})
export class PatientPortalComponent {

}
