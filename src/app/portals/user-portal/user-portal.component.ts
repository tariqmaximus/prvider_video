import { Component } from '@angular/core';
import { PatientRoomComponent } from "../../rooms/patient-room/patient-room.component";

@Component({
  selector: 'app-user-portal',
  imports: [ PatientRoomComponent],
  templateUrl: './user-portal.component.html',
  styleUrl: './user-portal.component.css'
})
export class UserPortalComponent {

}
