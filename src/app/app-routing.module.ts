import { Routes } from '@angular/router';
import { ProviderPortalComponent } from './portals/provider-portal/provider-portal.component';
import { UserCheckinComponent } from './portals/user-portal/user-checkin/user-checkin.component';
import { UserAccessComponent } from './portals/user-portal/user-access/user-access.component';
import { UserWaitingComponent } from './portals/user-portal/user-waiting/user-waiting.component';





export const routes: Routes = [
  //provider room
  { path: 'provider-room', component: ProviderPortalComponent },

  //user room
{ path: 'user-checkin', component: UserCheckinComponent },
{ path: 'user-access', component: UserAccessComponent },
{ path: 'user-waiting', component: UserWaitingComponent },


];
