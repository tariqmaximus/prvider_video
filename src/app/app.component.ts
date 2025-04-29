import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { providerPortalComponent } from "./portals/provider-portal/provider-portal.component";
import { UserCheckinComponent } from './portals/user-portal/user-checkin/user-checkin.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, providerPortalComponent, UserCheckinComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  routes = {
    providerPortalComponent: { label: 'provider', link: '/' },
    UserPortalComponent: { label: 'user', link: '/user' },
  
  };

  logout() {
    localStorage.clear();
    // Optional redirect logic can be placed here if needed
  }
}
