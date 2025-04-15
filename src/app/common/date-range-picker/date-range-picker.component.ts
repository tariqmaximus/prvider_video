import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css']
})
export class DateRangePickerComponent implements OnInit {
  private _startDate: Date | null = null;
  private _endDate: Date | null = null;

  private interval: any;

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
    this.setupDateChangeEmitter();
  }

  set startDate(value: Date | null) {
    this._startDate = value;
    this.emitDateRange();
  }

  get startDate(): Date | null {
    return this._startDate;
  }

  set endDate(value: Date | null) {
    this._endDate = value;
    this.emitDateRange();
  }

  get endDate(): Date | null {
    return this._endDate;
  }

  private emitDateRange(): void {
    if (this._startDate && this._endDate) {
      this.modalService.emitDateRange(this._startDate, this._endDate);
    }
  }

  private setupDateChangeEmitter(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      if (this._startDate && this._endDate) {
        this.modalService.emitDateRange(this._startDate, this._endDate);
        clearInterval(this.interval);
      }
    }, 100);
  }
}
