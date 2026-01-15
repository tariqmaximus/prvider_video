import { Routes } from '@angular/router';
import { ProviderPortalComponent } from './portals/provider-portal/provider-portal.component';
import { UserCheckinComponent } from './portals/user-portal/user-checkin/user-checkin.component';
import { UserAccessComponent } from './portals/user-portal/user-access/user-access.component';
import { UserWaitingComponent } from './portals/user-portal/user-waiting/user-waiting.component';
import { VideoCallComponent } from './common/video-call/video-call.component';

export const routes: Routes = [
  { path: '', component: ProviderPortalComponent },

  { path: 'tele/video-call', component: VideoCallComponent },

  { path: 'tele/user-checkin', component: UserCheckinComponent },
  { path: 'tele/user-access', component: UserAccessComponent },
  { path: 'tele/user-waiting', component: UserWaitingComponent },

  // fallback (Angular ke andar safety)
  { path: '**', redirectTo: '' }
];
