import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() toggleWaiting = new EventEmitter<void>(); // 👈 create an event

  onToggleWaitingList() {
    this.toggleWaiting.emit(); // 👈 emit when button clicked
  }
}
