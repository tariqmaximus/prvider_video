import { Component } from '@angular/core';
import { VideoCallComponent } from "../../common/video-call/video-call.component";

@Component({
  selector: 'app-doctorRoom',
  templateUrl: './doctorRoom.component.html',
  styleUrls: ['./doctorRoom.component.css'],
  imports: [VideoCallComponent]
})
export class DoctorRoomComponent {

  readonly link: string = 'http://maximus.com/2343sdfsd';

  copyLink(): void {
    navigator.clipboard.writeText(this.link).then(() => {
      alert('Link copied to clipboard!');
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  }

  shareLink(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;

    switch (value) {
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(this.link)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=Join My Video Room&body=${encodeURIComponent(this.link)}`;
        break;
      case 'copy':
        this.copyLink();
        break;
      default:
        console.log('No action for:', value);
    }
  }
}
