import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
} from '@angular/core';
import { DashboardComponent } from '../../sections/dashboard/dashboard.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SideBarComponent } from '../../components/sidebar/sidebar.component';
import { ThemeService } from '../../theme.service';
import { LabSummaryComponent } from '../../sections/lab-summary/lab-summary.component';
import { MessagesComponent } from '../../sections/messages/messages.component';
import { ProfileComponent } from '../../sections/profile/profile.component';
import { LogComponent } from '../../sections/log/log.component';
import { VisitsComponent } from '../../sections/visits/visits.component';
import { NotificationsComponent } from '../../sections/notifications/notifications.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    LabSummaryComponent,
    MessagesComponent,
    ProfileComponent,
    LogComponent,
    VisitsComponent,
    NotificationsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  title = 'PHR-code';
  headerTitle: string = '';
  private observer: MutationObserver | null = null;

  // Only these IDs are valid for tab activation
  private validTabIds = [
    'home',
    'hospitalvisits',
    'lab-summary',
    'messages',
    'profile',
    'log',
    'notifications',
  ];

  constructor(private themeService: ThemeService, private elRef: ElementRef) {}

  toggleMenu() {
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
      mainMenu.classList.toggle('close-menu');
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngAfterViewInit() {
    // Setup external tab link handling
    if (typeof window !== 'undefined') {
      document.addEventListener('click', this.handleTabLinkClick.bind(this));
    }

    // Optional MutationObserver placeholder
    if (typeof MutationObserver !== 'undefined') {
      const observer = new MutationObserver(() => {
        // Placeholder for mutation handling
      });

      const target = document.querySelector('.some-element');
      if (target) {
        observer.observe(target, { childList: true, subtree: true });
      }
    }
  }

  handleTabLinkClick(event: Event) {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

    if (anchor) {
      const tabId = anchor.getAttribute('href')?.substring(1); // remove '#'

      // Only allow valid tab ID activation
      if (tabId && this.validTabIds.includes(tabId)) {
        this.activateTab(tabId);
        event.preventDefault();
      }
    }
  }

  activateTab(tabId: string) {
    const tabPanels = this.elRef.nativeElement.querySelectorAll('.tab-panel');
    tabPanels.forEach((panel: HTMLElement) => {
      if (panel.id === tabId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }

    document.removeEventListener('click', this.handleTabLinkClick as any);
  }

  onTitleChange(newTitle: string) {
    this.headerTitle = newTitle;
  }
}
