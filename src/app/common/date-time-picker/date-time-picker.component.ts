import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-time-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './date-time-picker.component.html',
  styleUrl: './date-time-picker.component.css'
})
export class DateTimePickerComponent {
  selectedDate: Date | null = null;
  chosenTime: string = '';
  
  // Full list of time slots (6 AM - 10 PM)
  allTimeSlots: string[] = [
    '06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
    '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM'
  ];

  // Dummy selected slots for different dates
  timeSlotsByDate: { [key: string]: string[] } = {
    '2025-04-08': ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '03:00 PM'],
    '2025-04-09': ['02:00 PM', '03:00 PM', '04:00 PM', '06:00 PM'],
    '2025-04-10': ['08:30 AM', '10:00 AM', '12:00 PM', '02:30 PM', '05:00 PM'],
    '2025-04-11': ['07:00 AM', '09:30 AM', '11:00 AM', '01:30 PM', '04:00 PM'],
    '2025-04-12': ['06:00 AM', '08:00 AM', '10:00 AM', '12:30 PM', '03:30 PM'],
    '2025-04-13': ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM', '07:00 PM'],
    '2025-04-14': ['07:30 AM', '10:00 AM', '12:30 PM', '03:00 PM', '06:30 PM'],
  };

  selectedTimeSlots: string[] = []; // Slots selected for the selected date

  // Handle Date Selection
  onDateChange(event: Date) {
    this.selectedDate = event;
    const formattedDate = this.formatDate(event);

    // Get selected slots for selected date
    this.selectedTimeSlots = this.timeSlotsByDate[formattedDate] || [];

    // Reset chosenTime when the date changes
    this.chosenTime = '';
  }

  // Handle Time Selection
  onTimeChange(time: string) {
    if (this.selectedTimeSlots.includes(time)) {
      this.chosenTime = `${this.formatDate(this.selectedDate!)} - ${time}`;
    }
  }

  // Format date to YYYY-MM-DD
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
