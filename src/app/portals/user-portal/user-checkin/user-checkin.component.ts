import { Component } from '@angular/core';
import { PatientRoomComponent } from "../../../rooms/patient-room/patient-room.component";

@Component({
  selector: 'app-user-checkin',
  imports: [ PatientRoomComponent],
  templateUrl: './user-checkin.component.html',
  styleUrl: './user-checkin.component.css'
})
export class UserCheckinComponent {

}
