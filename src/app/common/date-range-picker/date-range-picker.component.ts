import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [
    CommonModule,  // ✅ Fix: Add CommonModule to enable pipes like 'date'
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.css'
})
export class DateRangePickerComponent {
  startDate: Date | null = null;
  endDate: Date | null = null;
}
