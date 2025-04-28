import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-room',
  templateUrl: './patient-room.component.html',
  styleUrls: ['./patient-room.component.css']
})
export class PatientRoomComponent {

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
