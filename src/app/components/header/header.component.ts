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
  patientCount: number = 0;

  constructor() {}

  ngOnInit(): void {
    // For now, you can set it manually or later fetch from a service
    this.patientCount = 5; // Example: 5 patients waiting
  }
}
