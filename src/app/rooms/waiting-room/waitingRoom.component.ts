import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from '../../shared/user-info/user-info.component';
import { UserTransferComponent } from '../../shared/user-transfer/user-transfer.component';
import { ChatComponent } from '../../shared/chat/chat.component';

interface Message {
  name: string;
  time: string;
  stage: 'read' | 'unread' | 'pending' | 'active';
}

@Component({
  selector: 'app-waiting-room',
  standalone: true,
  imports: [CommonModule, UserInfoComponent, UserTransferComponent, ChatComponent],
  templateUrl: './waitingRoom.component.html',
  styleUrls: ['./waitingRoom.component.css'],
})
export class WaitingRoomComponent {
  @Input() showWaitingRoom: boolean = false;
  @Input() showcallerTimer: boolean = false;

  @Output() titleChange = new EventEmitter<string>();

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

  // Each accordion item will have its own active tab
  activeTabs: { [key: number]: string } = {};

  // Toggle accordion item
  toggleChat(index: number): void {
    if (this.expandedIndex === index) {
      // Close the accordion
      this.expandedIndex = null;
      this.showCallerId = false;
      this.activeCaller = null;
    } else {
      // Open the accordion
      this.expandedIndex = index;
      this.activeCaller = this.waitingRoom[index];
      this.showCallerId = true;

      // Set default active tab for this item if not already set
      if (!this.activeTabs[index]) {
        this.activeTabs[index] = 'info';
      }
    }
  }

  // Get initials for avatar
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  // Get background color based on stage
  getStageColor(stage: string): string {
    return {
      unread: '#f9a1ab',
      read: '#a4e5c2',
      pending: '#ffe89e',
      active: '#7ec4de',
    }[stage] || '#ccc';
  }

  // Get text color for stage
  getStageTextColor(stage: string): string {
    return this.getStageColor(stage);
  }

  // Set active tab for a specific accordion item
  setActiveTab(tab: string, index: number): void {
    this.activeTabs[index] = tab;
    this.titleChange.emit(tab);
  }

  // Increase waiting time by 5 minutes
  increaseWaitingTime(index: number): void {
    const msg = this.waitingRoom[index];
    const match = msg.time.match(/(\d+)/);

    if (match) {
      const mins = parseInt(match[1], 10) + 5;
      msg.time = `Waiting for ${mins} mins`;
    }
  }
}
