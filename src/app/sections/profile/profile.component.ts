import { Component } from '@angular/core';
import { ProfileCardComponent } from "../../shared/profile-card/profile-card.component";
import { UsersComponent } from "../../shared/users/users.component";


@Component({
  selector: 'app-profile',
  imports: [ProfileCardComponent, UsersComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
