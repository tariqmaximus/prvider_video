import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "../../models/chat/chat.component";



type UserIconType =
  | 'admin-male'
  | 'admin-female'
  | 'doctor-male'
  | 'doctor-female'
  | 'user-female'
  | 'user-male'
  | 'user-girl'
  | 'user-boy';

interface Message {
  name: string;
  time: string;
  iconType: UserIconType;
  stage: 'read' | 'unread' | 'pending' | 'active'; // more stages if needed
}

@Component({
  selector: 'app-waitingRoom',
  standalone: true,
  imports: [CommonModule, ChatComponent],
  templateUrl: './waitingRoom.component.html',
  styleUrl: './waitingRoom.component.css',
})
export class waitingRoomComponent {
  waitingRoom: Message[] = [
    {
      name: 'Josaf Mareen',
      time: 'Waiting for 36 mints',
      iconType: 'admin-male',
      stage: 'unread',
    },
    {
      name: 'Muhmmed Umer',
      time: 'Waiting for 25 mints',
      iconType: 'admin-male',
      stage: 'pending',
    },
    {
      name: 'Hashim Sulman',
      time: 'Waiting for 20 mints',
      iconType: 'admin-male',
      stage: 'active',
    },
    {
      name: 'Abdull Muqeet',
      time: 'Waiting for 15 mints',
      iconType: 'admin-male',
      stage: 'read',
    },
    {
      name: 'Jason Dewerd',
      time: 'Waiting for 5 mints',
      iconType: 'admin-male',
      stage: 'read',
    },
  ];

  selectedRoom: Message | null = null;

  selectRoom(message: Message) {
    this.selectedRoom = message;
  }
  expandedIndex: number | null = null;

  toggleChat(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }
  
  backToList() {
    this.selectedRoom = null;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(n => n.charAt(0))
      .join('')
      .toUpperCase();
  }

  getStageColor(stage: string): string {
    switch (stage) {
      case 'unread':
        return '#f67280'; // red
      case 'read':
        return '#57cc99'; // green
      case 'pending':
        return '#ffd166'; // yellow
      case 'active':
        return '#118ab2'; // blue
      default:
        return '#888'; // fallback
    }
  }

  getStageTextColor(stage: string): string {
    switch (stage) {
      case 'unread':
        return '#f67280';
      case 'read':
        return '#57cc99';
      case 'pending':
        return '#ffd166';
      case 'active':
        return '#118ab2';
      default:
        return '#ccc';
    }
  }
}
