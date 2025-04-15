import { Component, input, Input } from '@angular/core';
import { IconComponent } from "../../common/users/icon.component";
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../common/card/card.component";

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css'],
  imports: [IconComponent, CommonModule, CardComponent,]
})
export class ProfileCardComponent {
  isImageAvailable: boolean = true;
  ImagePath: string = 'assets/dp.jpg';
  handleImageError() {
    this.isImageAvailable = false;
  }
  @Input() name: string = '';
  @Input() pid: string = '';
  @Input() phone: string = '';
  @Input() age: string = '';
  @Input() gender: string = '';
  @Input() dob: string = '';
  @Input() address: string = '';
  @Input() primary_ins: string = '';
  @Input() secondary_ins: string = '';
}
