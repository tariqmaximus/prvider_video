import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { providerPortalComponent } from "./portals/provider-portal/provider-portal.component";
import { UserPortalComponent } from "./portals/user-portal/user-portal.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, providerPortalComponent, UserPortalComponent],
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
