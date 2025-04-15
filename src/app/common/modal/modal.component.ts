import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { Subscription } from 'rxjs';
import { start } from 'repl';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId: string = `modal-${Math.random().toString(36).substr(2, 9)}`;
  @Input() showFooter: boolean = true; // Default is true

  private dateRangeSubscription!: Subscription;
  date = {};

  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
    this.dateRangeSubscription = this.modalService.dateRanges$.subscribe({
      next: (data) => {
        this.date = data;
      },
      error: (error) => {
        console.error('Error receiving date range:', error);
      }
    });
  }

  ngOnDestroy(): void {

    if (this.dateRangeSubscription) {
      this.dateRangeSubscription.unsubscribe();
    }
  }

  onModalApply(): void {
    if (this.date && this.modalService.applyCallback) {
      this.modalService.applyCallback(this.date);
    }

    const closeButton = document.querySelector('[data-bs-dismiss="modal"]');
    if (closeButton) {
      closeButton.dispatchEvent(new Event('click'));
    } else {
      console.warn('Close button not found');
    }
  }

}
