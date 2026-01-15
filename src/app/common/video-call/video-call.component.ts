import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VideoThumnailComponent } from "../video-thumnail/video-thumnail.component";
import { WaitingRoomComponent } from "../../rooms/waiting-room/waitingRoom.component";
import { ChatComponent } from "../../shared/chat/chat.component";

@Component({
  selector: 'app-video-call',
  standalone: true,
  imports: [
    VideoThumnailComponent,
    WaitingRoomComponent,
    ChatComponent
  ],
  templateUrl: './video-call.component.html',
  styleUrl: './video-call.component.css'
})
export class VideoCallComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('✅ VideoCallComponent loaded successfully');
  }

  // Optional: safe navigation back to home
  goToHome(): void {
    this.router.navigate(['']);
  }
}
