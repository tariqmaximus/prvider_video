import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
  imports: [CommonModule]
})
export class ButtonsComponent {
  /**
   * Button type: defines styling class like `btn--primary`, `btn--danger`, etc.
   */
  @Input() type: 'primary' | 'secondary' | 'danger' | 'ghost' | 'icon' = 'primary';

  /**
   * Button label: displayed inside the button if present
   */
  @Input() label?: string;

  /**
   * Optional icon class (e.g. `fas fa-play` or `icon-mic`)
   */
  @Input() icon?: string;

  /**
   * Button disabled state
   */
  @Input() disabled: boolean = false;

  /**
   * Optional custom class to apply additional styles
   */
  @Input() customClass: string = '';

  /**
   * Button click event output
   */
  @Output() btnClick = new EventEmitter<void>();

  /**
   * Handles click event internally, blocks if disabled
   */
  onClick(): void {
    if (!this.disabled) {
      this.btnClick.emit();
    }
  }
}
