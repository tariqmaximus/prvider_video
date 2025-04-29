import { Routes } from '@angular/router';
import { providerPortalComponent } from './portals/provider-portal/provider-portal.component';
import { PatientPortalComponent } from './portals/patient-portal/patient-portal.component';


export const routes: Routes = [
  { path: '', component: providerPortalComponent },
{ path: 'patient-portal', component: PatientPortalComponent },

];
