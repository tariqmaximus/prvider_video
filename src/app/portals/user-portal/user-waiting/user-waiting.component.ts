import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WaitingRoomComponent } from '../../../rooms/waiting-room/waitingRoom.component';
import { DoctorsListComponent } from '../../../rooms/doctors-list/doctors-list.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { DoctorRoomComponent } from "../../../rooms/docter-room/doctorRoom.component";

interface Message {
  name: string;
  time: string;
  stage: string;
}

@Component({
  selector: 'app-user-waiting',
  standalone: true,
  imports: [
    CommonModule,
    WaitingRoomComponent,
    DoctorsListComponent,
    HeaderComponent,
    DoctorRoomComponent
  ],
  templateUrl: './user-waiting.component.html',
  styleUrl: './user-waiting.component.css'
})
export class UserWaitingComponent {
  @Output() titleChange = new EventEmitter<string>();

  waitingRoom: Message[] = [
    { name: 'Dr jasof', time: 'Waiting for 36 mins', stage: 'unread' }
  ];

  selectedRoom: Message | null = null;
  waitingListVisible: boolean = true;

  ngOnInit(): void {
    this.sortWaitingRoom();
  }

  sortWaitingRoom(): void {
    this.waitingRoom.sort((a, b) => {
      return this.extractMinutes(b.time) - this.extractMinutes(a.time);
    });
  }

  extractMinutes(timeString: string): number {
    const match = timeString.match(/(\d+)\s*mins?/);
    return match ? parseInt(match[1], 10) : 0;
  }

  selectRoom(message: Message): void {
    this.selectedRoom = message;
  }

  toggleWaitingList(): void {
    this.waitingListVisible = !this.waitingListVisible;
  }
}
