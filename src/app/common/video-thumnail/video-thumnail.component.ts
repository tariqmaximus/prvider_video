import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <<< Add this import

@Component({
  selector: 'app-video-thumnail',
  standalone: true, // (optional but recommended for standalone components)
  imports: [CommonModule], // <<< Add CommonModule here
  templateUrl: './video-thumnail.component.html',
  styleUrls: ['./video-thumnail.component.css']
})
export class VideoThumnailComponent {
  isAudioOn = true;
  isVideoOn = true;
  testInProgress = false;

  toggleAudio(): void {
    this.isAudioOn = !this.isAudioOn;
    console.log('Audio toggled:', this.isAudioOn ? 'On' : 'Off');
  }

  toggleVideo(): void {
    this.isVideoOn = !this.isVideoOn;
    console.log('Video toggled:', this.isVideoOn ? 'On' : 'Off');
  }

  testAudioVideo(): void {
    this.testInProgress = true;
    console.log('Testing Audio and Video...');
    setTimeout(() => {
      this.testInProgress = false;
      console.log('Test complete.');
    }, 3000);
  }
}
