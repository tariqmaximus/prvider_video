import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ModalService } from '../../common/modal/modal.service';
import { FmAppointmentComponent } from '../../forms/fm-appointment/fm-appointment.component';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent {
  doctors = [
    {
      profilePicture: 'assets/dp1.jpg',
      name: 'Jason',
      special: 'Heart',
      department: 'Cardiology',
      status: 'Active'
    },
    {
      profilePicture: 'assets/dp2.jpg',
      name: 'Emma',
      special: 'Lungs',
      department: 'Pulmonology',
      status: 'Available'
    },
    {
      profilePicture: 'assets/dp3.jpg',
      name: 'Michael',
      special: 'Brain',
      department: 'Neurology',
      status: 'Busy'
    },
    {
      profilePicture: 'assets/dp4.jpg',
      name: 'Sophia',
      special: 'Bones',
      department: 'Orthopedics',
      status: 'Inactive'
    },
  ];

  constructor(private modalService: ModalService) {}

  onBookAppointment(doctor: any) {
    this.modalService.openDynamicModal(
      `Book Appointment with ${doctor.name}`, // Modal Title
      'Apply', 
      'BookAppointment',
      FmAppointmentComponent
    );
  }

  /** ✅ Fix: Ensure Correct Property Name */
  actionButtons = [
    {
      label: 'Book',
      tooltip: 'Book an Appointment',
      action: (doctor: any) => this.onBookAppointment(doctor)
    }
  ];
}
