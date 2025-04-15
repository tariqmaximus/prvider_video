import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'reset-password', component: ResetPasswordComponent },
{ path: 'change-password', component: ChangePasswordComponent }
];
