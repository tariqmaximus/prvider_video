import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../../shared/chat/chat.component';
import { UserInfoComponent } from "../../shared/user-info/user-info.component";
import { UserTransferComponent } from "../../shared/user-transfer/user-transfer.component";

interface Message {
  name: string;
  time: string;
  stage: 'read' | 'unread' | 'pending' | 'active';
}

@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [CommonModule, ChatComponent, UserInfoComponent, UserTransferComponent],
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent {
  patients: any[] = [];
  patientCount: number = 0;

  waitingRoom: Message[] = [
    { name: 'DR Jason', time: '5 mins remaining', stage: 'unread' },

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
    this.waitingRoom = this.waitingRoom
      .filter(msg => this.extractMinutes(msg.time) >= 0) // Filter out bad data
      .sort((a, b) => {
        const minutesA = this.extractMinutes(a.time);
        const minutesB = this.extractMinutes(b.time);
        return minutesB - minutesA;
      });
  }

  extractMinutes(timeString: string): number {
    const match = timeString.match(/(\d+)\s*mins?/i);
    return match ? parseInt(match[1], 10) : -1;
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
    const currentMinutes = this.extractMinutes(msg.time);

    if (currentMinutes >= 0) {
      const updatedMinutes = currentMinutes + 5;
      msg.time = `${updatedMinutes} mins remaining`;
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
