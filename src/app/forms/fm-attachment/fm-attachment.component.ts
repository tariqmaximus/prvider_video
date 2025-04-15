import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fm-attachment',
  standalone: true,
  imports: [CommonModule], // ✅ Add this
  templateUrl: './fm-attachment.component.html',
  styleUrls: ['./fm-attachment.component.css']
})
export class FmAttachmentComponent {
  fileName: string = '';
}
