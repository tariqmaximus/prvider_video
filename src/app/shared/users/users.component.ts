import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { ModalService } from '../../common/modal/modal.service';
import { FmAppointmentComponent } from '../../forms/fm-appointment/fm-appointment.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, CardComponent, SmartTableComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      profilePicture: 'assets/dp1.jpg',
      fullName: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: 'Administrator',
      status: 'Active'
    },
    {
      profilePicture: 'assets/dp2.jpg',
      fullName: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: 'Editor',
      status: 'Pending'
    },
    {
      profilePicture: 'assets/dp3.jpg',
      fullName: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: 'Viewer',
      status: 'Suspended'
    },
    {
      profilePicture: 'assets/dp4.jpg',
      fullName: 'Dana White',
      email: 'dana.white@example.com',
      role: 'Contributor',
      status: 'In Active'
    },
    {
      profilePicture: 'assets/dp5.jpg',
      fullName: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      role: 'Moderator',
      status: 'Active'
    }

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
      label: 'View',
      tooltip: 'View',
      action: (doctor: any) => this.onBookAppointment(doctor)
    }
  ];
}
