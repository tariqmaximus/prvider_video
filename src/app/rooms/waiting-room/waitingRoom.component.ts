import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../../models/chat/chat.component';

interface Message {
  name: string;
  time: string;
  stage: 'read' | 'unread' | 'pending' | 'active';
}

@Component({
  selector: 'app-waiting-room',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './waitingRoom.component.html',
  styleUrls: ['./waitingRoom.component.css'],
})
export class WaitingRoomComponent {
  waitingRoom: Message[] = [
    { name: 'Josaf Mareen', time: 'Waiting for 36 mints', stage: 'unread' },
    { name: 'Muhmmed Umer', time: 'Waiting for 25 mints', stage: 'pending' },
    { name: 'Hashim Sulman', time: 'Waiting for 20 mints', stage: 'active' },
    { name: 'Abdull Muqeet', time: 'Waiting for 15 mints', stage: 'read' },
    { name: 'Jason Dewerd', time: 'Waiting for 5 mints', stage: 'read' },
    
  ];

  selectedRoom: Message | null = null;

  // Track which index is expanded
  expandedIndex: number | null = null;

  // Tabs
  activeTab: string = 'chat';
  selectedTabTitle: string = 'Chat';

  @Output() titleChange = new EventEmitter<string>();

  // Tab titles (expand this if more tabs needed)
  titles: { [key: string]: string } = {
    chat: 'Chat',
    info: 'Info',
    sort: 'Sort',
    delete: 'Delete',
    history: 'History',
  };

  /** Select a patient card */
  selectRoom(message: Message) {
    this.selectedRoom = message;
  }

  /** Toggle card expansion */
  toggleChat(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  /** Get initials from name */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n.charAt(0))
      .join('')
      .toUpperCase();
  }

  /** Return background color based on stage */
  getStageColor(stage: string): string {
    switch (stage) {
      case 'unread': return '#f9a1ab';
      case 'read': return '#a4e5c2';
      case 'pending': return '#ffe89e';
      case 'active': return '#7ec4de';
      default: return '#ccc';
    }
  }

  /** Same color for stage text (can separate if needed) */
  getStageTextColor(stage: string): string {
    return this.getStageColor(stage);
  }

  /** Called when switching tabs */
  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.selectedTabTitle = this.titles[tab] || tab;
    this.titleChange.emit(this.selectedTabTitle);
  }

  /** For example actions */
  onSubmit(): void {
    console.log('Primary button clicked');
  }

  onMic(): void {
    console.log('Icon button clicked');
  }

  /** Optional: Collapse card manually */
  backToList(): void {
    this.selectedRoom = null;
    this.expandedIndex = null;
  }
}
