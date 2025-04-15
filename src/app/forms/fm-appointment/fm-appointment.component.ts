import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SmartTableComponent } from "../../common/smart-table/smart-table.component";
import { DateTimePickerComponent } from '../../common/date-time-picker/date-time-picker.component';


@Component({
  selector: 'app-fm-appointment',
  standalone: true,
  templateUrl: './fm-appointment.component.html',
  styleUrls: ['./fm-appointment.component.css'],
  imports: [CommonModule, FormsModule, SmartTableComponent, DateTimePickerComponent ]
})
export class FmAppointmentComponent {
  doctors = [
    { profilePicture: 'assets/dp1.jpg', name: 'Jason', special: 'Heart Specialist', department: 'Cardiology', status: 'Active' },
    { profilePicture: 'assets/dp2.jpg', name: 'Emma', special: 'Lung Specialist', department: 'Pulmonology', status: 'Available' },
    { profilePicture: 'assets/dp3.jpg', name: 'Michael', special: 'Brain Surgeon', department: 'Neurology', status: 'Busy' },
    { profilePicture: 'assets/dp4.jpg', name: 'Sophia', special: 'Orthopedic Surgeon', department: 'Orthopedics', status: 'Inactive' }
  ];
  
  appointments = [
    { date: '2025-01-15', time: '10:30 AM', profilePicture: 'assets/dp1.jpg', name: 'Jason', special: 'Heart Specialist', department: 'Cardiology', status: 'Scheduled' }
  ];
  
  departments = ['Cardiology', 'Pulmonology', 'Neurology', 'Orthopedics'];
  filteredDoctors = [...this.doctors]; // Initially, all doctors are shown

  actionButtons = [{ label: 'Select', tooltip: 'Choose Doctor', action: (doctor: any) => this.selectDoctor(doctor) }];

  step: number = 1;
  selectedDoctor: any = null; // Store the selected doctor's details

  appointment = {
    fullName: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    doctorProfile: '',
    special: '',
    date: '',
    time: '',
    status: 'Scheduled'
  };

  timeSlots = ['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'];


  filterDoctors() {
    if (this.appointment.department) {
      this.filteredDoctors = this.doctors.filter(doctor => doctor.department === this.appointment.department);
    } else {
      this.filteredDoctors = [...this.doctors];
    }
  }

 
  selectDoctor(doctor: any) {
    this.selectedDoctor = doctor; // Store full doctor details
    this.appointment.doctor = doctor.name;
    this.appointment.doctorProfile = doctor.profilePicture;
    this.appointment.special = doctor.special;
    this.appointment.department = doctor.department;


    this.filteredDoctors = [doctor]; 
  }

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  prevStep() {
    if (this.step > 1) {
      this.step--;
    }
  }

  confirmAppointment() {
    if (this.appointment.fullName && this.appointment.date && this.appointment.time) {
      this.appointments.push({
        profilePicture: this.appointment.doctorProfile,
        name: this.appointment.doctor,
        special: this.appointment.special,
        department: this.appointment.department,
        date: this.appointment.date,
        time: this.appointment.time,
        status: this.appointment.status
      });
  
      alert(`Appointment confirmed!\n
      Patient: ${this.appointment.fullName}\n
      Doctor: ${this.appointment.doctor}\n
      Specialty: ${this.appointment.special}\n
      Department: ${this.appointment.department}\n
      Date: ${this.appointment.date}\n
      Time: ${this.appointment.time}\n
      Status: ${this.appointment.status}`);
  
      // Reset appointment form
      this.appointment = {
        fullName: '',
        email: '',
        phone: '',
        department: '',
        doctor: '',
        doctorProfile: '',
        special: '',
        date: '',
        time: '',
        status: 'Scheduled'
      };

      this.selectedDoctor = null; // Reset selected doctor
      this.filteredDoctors = [...this.doctors]; // Show all doctors again
  
      this.step = 1; // Reset to the first step
    } else {
      alert('Please fill in all required fields before confirming.');
    }
  }
}
