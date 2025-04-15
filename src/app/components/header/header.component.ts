import { Component, EventEmitter, Output, Input, OnInit, Inject} from '@angular/core';
import { ThemeService } from '../../theme.service';
import { SubHeaderComponent } from "../sub-header/sub-header.component";
import { DropdownComponent } from "../../common/widgets/dropdown/dropdown.component";
import { LookupList, LOOKUP_LIST } from '../../app.config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [SubHeaderComponent, DropdownComponent],
})
export class HeaderComponent implements OnInit {
  @Output() menuToggle = new EventEmitter<void>();
  @Input() pageTitle: string = 'Home';
  pat_name: string = ''
  toggleMenu() {
    this.menuToggle.emit();
  }
  
  // Inject service
  constructor(private themeService: ThemeService, @Inject(LOOKUP_LIST) public lookupList: LookupList) {}

  ngOnInit(): void {
      this.assignValues();
  }


  assignValues(){
    this.pat_name = this.lookupList.patientInfo.last_name + ", " + this.lookupList.patientInfo.first_name;
  }
  // Menu items used by <app-dropdown>
  menuItems = [
    { label: 'Profile', action: 'profile' },
    { label: 'Settings', link: '/settings' },
    { label: 'Logout', link: '/logout' }
  ];

  // Handle menu item click (action)
  onDropdownItemClick(action: string) {
    if (action === 'profile') {
      // Call whatever logic you use to activate the "Profile" tab
      this.setActiveTab('profile');
    }
  }

  // Example tab switch logic
  setActiveTab(tab: string) {
    console.log(`Switching to tab: ${tab}`);
    // Your logic to activate the tab goes here
    // Could be state change, EventEmitter, shared service, etc.
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleFullScreen(): void {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }
}
