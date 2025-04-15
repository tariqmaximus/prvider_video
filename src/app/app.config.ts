import { ApplicationConfig, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { routes } from './app-routing.module';

import { LoggedInUser } from './shared/config/models/loged-in-user';
import { PracticeInfo } from './shared/config/models/practice-info';
import { InsuranceInformation } from './shared/config/models/insurance';

import { AuthService } from './authentication/auth-service';
import { DateTimeUtil } from './shared/config/date-time-util';
import { EncryptDecryptService } from './authentication/encrypt-decrypt-service';
import { LoadStartupService } from './services/login/load-startup.service';
import { LogMessage } from './shared/config/models/audit/log-message';

import { authInterceptor } from './authentication/auth.interceptor';
import { withInterceptors } from '@angular/common/http';
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export interface AppConfig {
  apiEndpoint: string;
  authServiceEndpoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
  authServiceEndpoint: environment.AuthServerEndpoint,
  apiEndpoint: environment.APIEndpoint
};

export const LOOKUP_LIST = new InjectionToken<LookupList>('LOOKUP_LIST');

export class LookupList {
  isPhrDataLoad: boolean = false;
  practiceInfo: PracticeInfo = new PracticeInfo();
  logedInUser: LoggedInUser = new LoggedInUser();
  patientInfo: any;
  providerList: Array<any> = [];
  lstdocumentPath: Array<any> = [];
  is_AuthUser: boolean = false;
  patientVitals: any;
  patientAllergies: any;
  patientMedication: any;
  PatientProblems: any;
  lstUserChartModuleSetting: Array<any> = [];
  loginLogID: any;
  insuranceInfo: InsuranceInformation = new InsuranceInformation();
  defaultPatPic: string = 'assets/images/pic.png';
  defaultPatMalePic: string = 'assets/images/img_male.png';
  defaultPatFemalePic: string = 'assets/images/img_female.png';
}

export const LookupListData = new LookupList();

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },
    { provide: LOOKUP_LIST, useValue: LookupListData },
    AuthService,
    DateTimeUtil,
    EncryptDecryptService,
    LoadStartupService,
    LogMessage

  ]
};
