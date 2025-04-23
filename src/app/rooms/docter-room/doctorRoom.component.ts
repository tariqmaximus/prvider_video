import { Component } from '@angular/core';

@Component({
  selector: 'app-doctorRoom',
  templateUrl: './doctorRoom.component.html',
  styleUrls: ['./doctorRoom.component.css']
})
export class DoctorRoomComponent {

  copyLink(): void {
    navigator.clipboard.writeText('http://maximus.com/2343sdfsd');
    alert('Link copied!');
  }
}
