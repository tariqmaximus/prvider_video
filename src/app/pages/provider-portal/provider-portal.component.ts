import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  WaitingRoomComponent } from "../../rooms/waiting-room/waitingRoom.component";
import { DoctorRoomComponent } from "../../rooms/docter-room/doctorRoom.component";
import { HeaderComponent } from "../../components/header/header.component";


@Component({
  selector: 'app-providerPortal',
  standalone: true,
  imports: [CommonModule, DoctorRoomComponent, WaitingRoomComponent, HeaderComponent],
  templateUrl: './provider-portal.component.html',
})
export class providerPortalComponent {
  selectedRoom: any = null; // You can define your selectedRoom logic based on your needs
  waitingListVisible = false; // 👈 default hidden

  toggleWaitingList() {
    this.waitingListVisible = !this.waitingListVisible;
  }
}
