import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { ThemeService } from '../../theme.service';
import { VideoPortalComponent } from "../../sections/video-portal/videoPortal.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    VideoPortalComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  title = 'PHR-code';
  headerTitle: string = '';
  private observer: MutationObserver | null = null;

  private validTabIds = [
    'home',
    'hospitalvisits',
    'lab-summary',
    'videoPortal',
    'profile',
    'log',
    'notifications',
  ];

  constructor(
    private themeService: ThemeService,
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}


  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.handleTabLinkClick.bind(this));

      if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(() => {
          // Placeholder for mutation handling
        });

        const target = document.querySelector('.some-element');
        if (target) {
          observer.observe(target, { childList: true, subtree: true });
        }

        this.observer = observer;
      }
    }
  }

  handleTabLinkClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

    if (anchor) {
      const tabId = anchor.getAttribute('href')?.substring(1); // remove '#'

      if (tabId && this.validTabIds.includes(tabId)) {
        this.activateTab(tabId);
        event.preventDefault();
      }
    }
  };

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

    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('click', this.handleTabLinkClick);
    }
  }

  onTitleChange(newTitle: string) {
    this.headerTitle = newTitle;
  }
}
