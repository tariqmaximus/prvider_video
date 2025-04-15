import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { ModalService } from '../../common/modal/modal.service';
import { FmAttachmentComponent } from '../../forms/fm-attachment/fm-attachment.component';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [CommonModule, CardComponent,],
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css'],
})
export class AttachmentsComponent {
  @Input() attData: any[] = [];
}
