import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  routes = {
    home: { label: 'Home', link: '/' },
    login: { label: 'Login', link: '/login' },
    logout: { label: 'Logout', link: '/login' }
  };

  logout() {
    localStorage.clear();
    // Optional redirect logic can be placed here if needed
  }
}
