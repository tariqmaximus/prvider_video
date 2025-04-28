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
  patients: any[] = []; // This would normally come from a service or API
  patientCount: number = 0;

  waitingRoom: Message[] = [
    { name: 'Josaf Mareen', time: 'Waiting for 36 mins', stage: 'unread' },
    { name: 'Muhmmed Umer', time: 'Waiting for 25 mins', stage: 'pending' },
    { name: 'Hashim Sulman', time: 'Waiting for 20 mins', stage: 'active' },
    { name: 'Abdull Muqeet', time: 'Waiting for 15 mins', stage: 'read' },
    { name: 'Jason Dewerd', time: 'Waiting for 5 mins', stage: 'read' },
    { name: 'Josaf Mareen', time: 'Waiting for 36 mins', stage: 'unread' },
    { name: 'Muhmmed Umer', time: 'Waiting for 25 mins', stage: 'pending' },
    { name: 'Hashim Sulman', time: 'Waiting for 20 mins', stage: 'active' },
    { name: 'Abdull Muqeet', time: 'Waiting for 15 mins', stage: 'read' },
    { name: 'Jason Dewerd', time: 'Waiting for 5 mins', stage: 'read' },
  ];

  selectedRoom: Message | null = null;
  expandedIndex: number | null = null;
  activeTab: string = 'chat';
  selectedTabTitle: string = 'Chat';

  @Output() titleChange = new EventEmitter<string>();

  titles: Record<string, string> = {
    chat: 'Chat',
    info: 'Info',
    sort: 'Sort',
    delete: 'Delete',
    history: 'History',
  };

  ngOnInit(): void {
    this.patients = [
      { name: 'John Doe' },
      { name: 'Jane Smith' },
      { name: 'Alice Johnson' }
    ];
    this.calculatePatientCount();
    this.sortWaitingRoom();
  }

  calculatePatientCount(): void {
    this.patientCount = this.patients.length;
  }

  sortWaitingRoom(): void {
    this.waitingRoom.sort((a, b) => {
      const minutesA = this.extractMinutes(a.time);
      const minutesB = this.extractMinutes(b.time);
      return minutesB - minutesA;
    });
  }

  extractMinutes(timeString: string): number {
    const match = timeString.match(/(\d+)\s*mins?/);
    return match ? parseInt(match[1], 10) : 0;
  }

  selectRoom(message: Message): void {
    this.selectedRoom = message;
  }

  toggleChat(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n.charAt(0))
      .join('')
      .toUpperCase();
  }

  getStageColor(stage: string): string {
    const colors: Record<string, string> = {
      unread: '#f9a1ab',
      read: '#a4e5c2',
      pending: '#ffe89e',
      active: '#7ec4de',
    };
    return colors[stage] || '#ccc';
  }

  getStageTextColor(stage: string): string {
    return this.getStageColor(stage);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    this.selectedTabTitle = this.titles[tab] || tab;
    this.titleChange.emit(this.selectedTabTitle);
  }

  increaseWaitingTime(index: number): void {
    const msg = this.waitingRoom[index];
    const match = msg.time.match(/(\d+)\s*mins?/);

    if (match) {
      const currentMinutes = parseInt(match[1], 10);
      msg.time = `Waiting for ${currentMinutes + 5} mins`;
      this.sortWaitingRoom();
    }
  }

  onSubmit(): void {
    console.log('Primary button clicked');
  }

  onMic(): void {
    console.log('Icon button clicked');
  }

  backToList(): void {
    this.selectedRoom = null;
    this.expandedIndex = null;
  }
}