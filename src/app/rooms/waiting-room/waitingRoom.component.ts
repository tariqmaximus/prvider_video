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
    {
      name: 'Josaf Mareen',
      time: 'Waiting for 36 mints',
      iconType: 'admin-male',
      stage: 'unread',
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
        return '#f9a1ab'; // lighter red
      case 'read':
        return '#a4e5c2'; // lighter green
      case 'pending':
        return '#ffe89e'; // lighter yellow
      case 'active':
        return '#7ec4de'; // lighter blue
      default:
        return '#ccc'; // fallback
    }
  }
  
  getStageTextColor(stage: string): string {
    switch (stage) {
      case 'unread':
        return '#f9a1ab';
      case 'read':
        return '#a4e5c2';
      case 'pending':
        return '#ffe89e';
      case 'active':
        return '#7ec4de';
      default:
        return '#ccc';
    }
  }
  
  onSubmit() {
    console.log('Primary button clicked');
  }

  onMic() {
    console.log('Icon button clicked');
  }
}
