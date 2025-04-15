import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NeonCardComponent } from "../../common/neon-card/neon-card.component";
import { AuthenticationCredentials } from '../../authentication/authenticationCredentials';
import { GeneralService } from '../../services/general/general.service';
import { LookupList, LOOKUP_LIST } from '../../app.config';
import { AuthService } from '../../authentication/auth-service';
import { DateTimeUtil } from '../../shared/config/date-time-util';
import { PhrService } from '../../services/phr/phr.service';
import { LoadStartupService } from '../../services/login/load-startup.service';
import { LogMessage } from '../../shared/config/models/audit/log-message';
import { debug } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NeonCardComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loadingCount: number = 0;
  
  loginForm: FormGroup;
  phrPatientSelectionForm!: FormGroup;
  submitted = false;
  storingInfo: boolean = false;
  showPatientSelection: boolean = false;
  loginStatus: string = "";
  loginStatusMessage = "Verifying Login Information. Please wait....";
  lstUserPatient: Array<any> = new Array();

  constructor(private fb: FormBuilder, private router: Router, private generalService: GeneralService,  @Inject(LOOKUP_LIST) public lookupList: LookupList, private authService : AuthService, private dateTimeUtil: DateTimeUtil, private phrService: PhrService, private loadStartup: LoadStartupService, private logMessage: LogMessage) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.lookupList.isPhrDataLoad = false;
    this.phrPatientSelectionForm = this.fb.group({
      ddPatient: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loginStatus = '';

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;
    this.loginStatus = "Verifying Login Information. Please wait...."
    this.generateToken(email,password);
    // Mock login
    // if (email === 'maxphr@123' && password === '123321') {
    //   this.router.navigate(['/']);
    // } else if(email !== 'maxphr@123' && password == '123321'){
    //   this.loginStatus = 'Invalid Email';
    // } else if(email == 'maxphr@123' && password !== '123321'){
    //   this.loginStatus = 'Invalid Password';
    // }
  }

  onPatientSelection(formData: any){
    if (formData.ddPatient == undefined) {
      alert("Please select patient.")
    }
    else {
      this.showPatientSelection = false;
      this.storingInfo = true;
      this.loadingCount = 2;
      this.getPHRLogedInUserDetail(this.authService.userId);
      this.getPatientInfo(formData.ddPatient);

      // let lstPatient = new ListFilterPipe().transform(this.lstUserAssignedPatients, "patient_id", formData.ddPatient);

      // if (lstPatient != undefined && lstPatient.length > 0) {
      //   this.lookupList.patientInfo = lstPatient[0];
      //   this.loadStartup.loadAppData();
      // }

    }
  }


  public generateToken(email: string, password: string) {
    let auth: AuthenticationCredentials = new AuthenticationCredentials();
    if (!this.lookupList.isPhrDataLoad) {
      auth.email = email;
      auth.password = password;
    }
  
    this.generalService.getAccessToken(auth).subscribe({
      next: (value: any) => {
        let encryptedToken = value.accessToken;
        this.authService.setToken(value.accessToken);
        let parsedToken: any = this.authService.decodeEncryptedToken(encryptedToken);
      
        this.lookupList.loginLogID = value.logInId;
        
        this.authService.userId = parsedToken.user_id;
     
        if (!value.firstChangePassStatus) {
          // this.isShowFirstPasswordChange = true;
          return;
        }
        this.authService.jwt_token_expiry = parsedToken.exp - parsedToken.iat;
        this.authService.jwt_token_creation_time = this.dateTimeUtil.getCurrentDateTimeDate();
  
        this.lstUserPatient = value.patientList;
        if (!this.lookupList.isPhrDataLoad) {
          if (this.lstUserPatient && this.lstUserPatient.length > 0) {
            this.phrPatientSelectionForm.get("ddPatient")?.setValue(this.lstUserPatient[0].patient_id);
            this.showPatientSelection = true;
            this.loginStatus = '';
          } else if (this.lstUserPatient && this.lstUserPatient.length === 1) {
            this.loadingCount = 2;
            this.getPHRLogedInUserDetail(this.authService.userId);
            this.getPatientInfo(this.lstUserPatient[0].patient_id);
          }
        }
      },
      error: (e: any) => {
        this.loginForm.get("email")?.enable();
        this.loginForm.get("password")?.enable();
  
        let message = "An unexpected error occurred.";

        if (e.status === 401) {
          message = "User Name or Password is Invalid.";
        } else if (e.status === 400 && e.error?.message) {
          message = e.error.message;
        } else if (e.status === 0 || e.status === 503) {
          message = "Connection with Server Failed.";
        } else {
          message = e.message || message;
        }
        
        this.logMessage.log(message);
        this.loginStatus = message;
      }
    });
  }


  getPHRLogedInUserDetail(userId: number) {
    this.phrService.getPHRLogedInUserDetail(userId).subscribe({
       next: (data: any) => {
        if (data != null && data != undefined) {
          this.lookupList.logedInUser.userId = data['user_id'];
          this.lookupList.logedInUser.userFullName = data['full_name'];
          this.lookupList.logedInUser.user_name = data['user_name'];
          this.lookupList.logedInUser.userFName = data['first_name'];
          this.lookupList.logedInUser.userLName = data['last_name'];
          this.lookupList.logedInUser.userMname = data['mname'];
          this.lookupList.logedInUser.password = data['password'];
          //this.lookupList.logedInUser.userRole = data['default_role'];          
          this.lookupList.logedInUser.systemIp = "255.255.255.255";
          this.lookupList.logedInUser.userType = data['user_type'];
          this.lookupList.logedInUser.practiceId = data['practice_id'];
          //this.lookupList.logedInUser.acPrintSetting = data['user_rights'];
          //this.updateLoginInformation(false);
          this.loadingCount--;
          if (this.loadingCount == 0) {
            this.loadStartup.loadAppData();
          }
        }
      },
      error: (error: any) => {
        this.loginStatus = "login_failed";
        this.loginStatusMessage = error.message;
        this.logMessage.log("getLoginUserData: " + error.status + " " + error.message);
      }
  });
  }


  getPatientInfo(patientId: number) {
    this.phrService.getPatientInfo(patientId).subscribe(
      {
        next: (value: any) => {
          this.lookupList.patientInfo = value;
          this.loadingCount--;
          if (this.loadingCount == 0) {
            this.loadStartup.loadAppData();
          }
         
        },
        error: (e: any) => {
          this.loginStatus = "login_failed";
          this.loginStatusMessage = e.message;
          this.logMessage.log("getPatientInfo: " + e.status + " " + e.message);
        }
      });
  }
}
