import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule

import { VideoThumnailComponent } from "../video-thumnail/video-thumnail.component";
import { WaitingRoomComponent } from "../../rooms/waiting-room/waitingRoom.component";
import { ChatComponent } from "../../shared/chat/chat.component";

@Component({
  selector: 'provider-call',
  standalone: true,
  imports: [
    VideoThumnailComponent,
    WaitingRoomComponent,
    ChatComponent,
    CommonModule  // Add CommonModule here
  ],
  templateUrl: './provider-call.component.html',
  styleUrls: ['./provider-call.component.css']
})
export class ProviderCallComponent implements OnInit {

  isChatVisible: boolean = false; // Initially, chat is hidden

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('ProviderCallComponent loaded successfully');
  }

  // Toggle chat visibility with change detection
  toggleChatVisibility() {
    this.isChatVisible = !this.isChatVisible; // Toggle visibility
    console.log('Chat visibility:', this.isChatVisible); // Log to see if it's toggling

    // Trigger change detection manually to ensure the view is updated
    this.cdRef.detectChanges();
  }

  // Optional: safe navigation back to home
  goToHome(): void {
    this.router.navigate(['']);
  }
}
