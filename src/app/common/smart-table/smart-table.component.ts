import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'smart-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.css']
})
export class SmartTableComponent implements OnInit {
  @Input() type!: string;
  @Input() data: any[] = [];
  @Input() showActions: boolean = true;
  @Input() actionButtons: { label: string; tooltip: string; className?: string; action?: (row: any) => void }[] = [];

  columns: { key: string; label: string }[] = [];
  activeRowIndex: number | null = null; // Track the active row

  ngOnInit(): void {
    this.setColumns();
  }

  setColumns() {
    const columnConfig: { [key: string]: { key: string; label: string }[] } = {
      vitals: [
        { key: 'date', label: 'Date' },
        { key: 'weight', label: 'Weight' },
        { key: 'height', label: 'Height' },
        { key: 'bmi', label: 'BMI' },
        { key: 'bp', label: 'Blood Pressure' },
        { key: 'temperature', label: 'Temperature' },
      ],
      appointments: [
        { key: 'date', label: 'Date' },
        // { key: 'profilePicture', label: 'Profile' },
        { key: 'provider', label: 'Provider' },
        { key: 'location', label: 'Location' },
        { key: 'lab', label: 'Lab'},
        { key: 'status', label: 'Status' },
      ],
      doctors: [
        { key: 'profilePicture', label: 'Profile' },
        { key: 'department', label: 'Department' },
        { key: 'status', label: 'Status' },
      ],
       encounters: [
        { key: 'visit_date', label: 'Visit Date' },
        { key: 'provider_name', label: 'Provider' },
        { key: 'location_name', label: 'Location' },
        { key: 'reason_detail', label: 'visit Reason' },
        { key: 'primary_diag', label: 'Diagnosis' },
        
      ],
      encounterdetails: [
        { key: 'date', label: 'Date' },
        { key: 'profilePicture', label: 'Provider' },
        { key: 'department', label: 'Department' },
        { key: 'location', label: 'Location' },
        { key: 'visitReason', label: 'visit Reason' },
        { key: 'diagnosis', label: 'Diagnosis' },
        
      ],
      users: [
        { key: 'profilePicture', label: 'Avatar' },
        { key: 'fullName', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'status', label: 'Status' },
      ],
      activities: [
        { key: 'timestamp', label: 'Timestamp' },
        { key: 'activityType', label: 'Activity Type' },
        { key: 'description', label: 'Description' },
        { key: 'performedBy', label: 'Performed By' }
      ],
      
      loginLogs: [
        { key: 'timestamp', label: 'Timestamp' },
        { key: 'user', label: 'User' },
        { key: 'ipAddress', label: 'IP Address' },
        { key: 'status', label: 'Status' }
      ],
      notifications: [
        { key: 'profilePicture', label: 'Avatar' },
        { key: 'title', label: 'Title' },
        { key: 'message', label: 'Message' },
        { key: 'date', label: 'Date' },
        { key: 'time', label: 'Time' },
        { key: 'read', label: 'Read Status' }
      ]
      
    };

    this.columns = columnConfig[this.type] || [];

    if (this.showActions && this.actionButtons.length > 0) {
      this.columns.push({ key: 'action', label: 'Actions' });
    }
  }

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'Active': 'tag success',
      'In Active': 'tag light',
      'Available': 'tag info',
      'busy': 'tag warning',
      'In Progress': 'tag primary',
      'On Hold': 'tag secondary',
      'Draft': 'tag muted',
      'Suspended': 'tag dark',
      'Expired': 'tag light',
      'Rejected': 'tag danger',
      'Approved': 'tag success',
      'Processing': 'tag primary',
      'Failed': 'tag danger',
      'Queued': 'tag info',
      'Archived': 'tag secondary',
      'Confirmed':'tag default',
      'Pending':'tag warning',
      'Completed':'tag success',
      'Scheduled':'tag success',
      'Cancelled':'tag danger',
    };

    return statusClasses[status] || 'tag default';
  }

  getValue(row: any, key: string): string {
    return row[key] || '-';
  }

  /** ✅ Fix: Handle missing profile images */
  handleImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/dummy.jpg';
  }

  handleButtonClick(button: any, row: any) {
    if (button.action) {
      button.action(row);
    }
  }

  toggleRowClass(index: number): void {
    this.activeRowIndex = this.activeRowIndex === index ? null : index;
  }
}
