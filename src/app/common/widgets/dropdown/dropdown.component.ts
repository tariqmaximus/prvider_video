import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() profileImage?: string;
  @Input() userName?: string;
  @Input() userRole?: string;
  @Input() buttonClasses: string | string[] = ['profile-tile', 'fill'];
  @Input() icon?: string;
  @Input() badgeCount?: number;

  // ✅ Now supports tabId, id, and ariaControls
  @Input() menuItems: {
    label: string;
    link?: string;
    action?: string;
    tabId?: string;
    id?: string;
    ariaControls?: string;
    ariaSelected?: string;
  }[] = [];

  @Output() menuItemClick = new EventEmitter<string>();

  constructor(private router: Router) {}

  onMenuItemClick(item: {
    label: string;
    link?: string;
    action?: string;
    tabId?: string;
    id?: string;
    ariaSelected?: string;
    ariaControls?: string;
  }) {
    if (item.action) {
      this.menuItemClick.emit(item.action);
    } else if (item.link) {
      this.router.navigate([item.link]);
    }
    // tabId is handled directly in the template using Bootstrap's data attributes
  }

  handleImageError(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
