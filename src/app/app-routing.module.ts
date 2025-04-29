import { Routes } from '@angular/router';
import { providerPortalComponent } from './portals/provider-portal/provider-portal.component';

import { UserCheckinComponent } from './portals/user-portal/user-checkin/user-checkin.component';


export const routes: Routes = [
  { path: '', component: providerPortalComponent },
{ path: 'user-portal', component: UserCheckinComponent },

];
