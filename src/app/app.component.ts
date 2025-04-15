import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ],
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
