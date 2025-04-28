import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { providerPortalComponent } from "./pages/portals/provider-portal/provider-portal.component";
import { PatientPortalComponent } from "./pages/portals/patient-portal/patient-portal.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, providerPortalComponent, PatientPortalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  routes = {
    providerPortalComponent: { label: 'provider', link: '/' },
    PatientPortalComponent: { label: 'Login', link: '/patient' },
  
  };

  logout() {
    localStorage.clear();
    // Optional redirect logic can be placed here if needed
  }
}
