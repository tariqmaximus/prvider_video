import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ModalService } from '../../common/modal/modal.service';
import { FmAppointmentComponent } from '../../forms/fm-appointment/fm-appointment.component';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent {
  appointments = [
    {
      date: '2025-01-15',
      profilePicture: 'assets/dp1.jpg',
      name: 'Jason',
      special: 'Heart',
      department: 'Cardiology',
      status: 'Scheduled'
    },
    {
      date: '2025-01-15',
      profilePicture: 'assets/dp2.jpg',
      name: 'Jolia Max',
      special: 'Brain',
      department: 'Cardiology',
      status: 'Cancelled'
    },
    {
      date: '2025-01-15',
      profilePicture: 'assets/dp3.jpg',
      name: 'Dr Robo',
      special: 'Skin',
      department: 'Cardiology',
      status: 'Pending'
    },
    {
      date: '2025-01-15',
      profilePicture: 'assets/dp3.jpg',
      name: 'Dr Robo',
      special: 'Skin',
      department: 'Cardiology',
      status: 'Confirmed'
    },
  ];

  constructor(private modalService: ModalService) {}

  onBookAppointment() {
    this.modalService.openDynamicModal(
      'Book Appointment', // Modal Title
      'Apply',             // Save Button Label
      'Select Date and Time',   // Modal ID
      FmAppointmentComponent // Component to load inside modal
    );
  }

  /** ✅ Fix: Add `headerButtons` property */
  headerButtons = [
    { 
      label: 'Schedule an Appointment', 
      icon: 'icon-add', 
      targetId: 'BookAppointment', 
      action: () => this.onBookAppointment() 
    }
  ];
}
