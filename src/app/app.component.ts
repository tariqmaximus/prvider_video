import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { providerPortalComponent } from "./pages/provider-portal/provider-portal.component";
import { PatientPortalComponent } from "./pages/patient-portal/patient-portal.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, providerPortalComponent, PatientPortalComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  routes = {
    providerPortal: { label: 'provider', link: '/' },
    patient: { label: 'Login', link: '/login' },
  
  };

  logout() {
    localStorage.clear();
    // Optional redirect logic can be placed here if needed
  }
}
