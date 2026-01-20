import { Routes } from '@angular/router';
import { ProviderPortalComponent } from './portals/provider-portal/provider-portal.component';
import { UserCheckinComponent } from './portals/user-portal/user-checkin/user-checkin.component';
import { UserAccessComponent } from './portals/user-portal/user-access/user-access.component';
import { UserWaitingComponent } from './portals/user-portal/user-waiting/user-waiting.component';
import { ProviderCallComponent } from './common/provider-call/provider-call.component';
import { UserCallComponent } from './common/user-call/user-call.component';

export const routes: Routes = [
  { path: '', component: ProviderPortalComponent },
  { path: 'provider-call', component: ProviderCallComponent },
  { path: 'user-call', component: UserCallComponent },
  { path: 'user-checkin', component: UserCheckinComponent },
  { path: 'user-access', component: UserAccessComponent },
  { path: 'user-waiting', component: UserWaitingComponent },

  // fallback (Angular ke andar safety)
  { path: '**', redirectTo: '' }
];
