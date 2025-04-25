import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  WaitingRoomComponent } from "../../rooms/waiting-room/waitingRoom.component";
import { DoctorRoomComponent } from "../../rooms/docter-room/doctorRoom.component";


@Component({
  selector: 'app-video-portal',
  standalone: true,
  imports: [CommonModule,  DoctorRoomComponent, WaitingRoomComponent],
  templateUrl: './videoPortal.component.html',
})
export class VideoPortalComponent {
  selectedRoom: any = null; // You can define your selectedRoom logic based on your needs
}
