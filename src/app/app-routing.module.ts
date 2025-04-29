import { Routes } from '@angular/router';
import { providerPortalComponent } from './portals/provider-portal/provider-portal.component';
import { UserPortalComponent } from './portals/user-portal/user-portal.component';


export const routes: Routes = [
  { path: '', component: providerPortalComponent },
{ path: 'user-portal', component: UserPortalComponent },

];
