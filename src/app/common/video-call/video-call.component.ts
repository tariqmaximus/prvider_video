import { Component } from '@angular/core';
import { UserRoomComponent } from "../../rooms/user-room/user-room.component";
import { VideoThumnailComponent } from "../video-thumnail/video-thumnail.component";
import { WaitingRoomComponent } from "../../rooms/waiting-room/waitingRoom.component";
import { ChatComponent } from "../../shared/chat/chat.component";

@Component({
  selector: 'app-video-call',
  imports: [VideoThumnailComponent, WaitingRoomComponent, ChatComponent],
  templateUrl: './video-call.component.html',
  styleUrl: './video-call.component.css'
})
export class VideoCallComponent {

}
