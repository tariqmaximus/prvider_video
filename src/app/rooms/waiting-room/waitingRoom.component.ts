import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../../shared/user-info/user-info.component';
import { UserTransferComponent } from '../../shared/user-transfer/user-transfer.component';

interface Message {
  name: string;
  time: string;
  stage: 'read' | 'unread' | 'pending' | 'active';
}

@Component({
  selector: 'app-waiting-room',
  standalone: true,
  imports: [CommonModule, UserInfoComponent, UserTransferComponent],
  templateUrl: './waitingRoom.component.html',
  styleUrls: ['./waitingRoom.component.css'],
})
export class WaitingRoomComponent {
@Input() showWaitingRoom: boolean = false;
@Input() showcallerTimer: boolean = false;

  waitingRoom: Message[] = [
    { name: 'Josaf Mareen', time: 'Waiting for 36 mins', stage: 'unread' },
    { name: 'Muhmmed Umer', time: 'Waiting for 25 mins', stage: 'pending' },
    { name: 'Hashim Sulman', time: 'Waiting for 20 mins', stage: 'active' },
    { name: 'Abdull Muqeet', time: 'Waiting for 15 mins', stage: 'read' },
    { name: 'Jason Dewerd', time: 'Waiting for 5 mins', stage: 'read' },
  ];

  expandedIndex: number | null = null;

  showCallerId = false;
  activeCaller: Message | null = null;

  activeTab = 'info';

  @Output() titleChange = new EventEmitter<string>();

  toggleChat(index: number): void {
    if (this.expandedIndex === index) {
      // CLOSE
      this.expandedIndex = null;
      this.showCallerId = false;
      this.activeCaller = null;
    } else {
      // OPEN
      this.expandedIndex = index;
      this.activeCaller = this.waitingRoom[index];
      this.showCallerId = true;
    }
  }

  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  getStageColor(stage: string): string {
    return {
      unread: '#f9a1ab',
      read: '#a4e5c2',
      pending: '#ffe89e',
      active: '#7ec4de',
    }[stage] || '#ccc';
  }

  getStageTextColor(stage: string): string {
    return this.getStageColor(stage);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.titleChange.emit(tab);
  }

  increaseWaitingTime(index: number): void {
    const msg = this.waitingRoom[index];
    const match = msg.time.match(/(\d+)/);

    if (match) {
      const mins = parseInt(match[1], 10) + 5;
      msg.time = `Waiting for ${mins} mins`;
    }
  }
}
