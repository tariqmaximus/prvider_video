
import { GeneralService } from './../general/general.service';
import { LookupList, LOOKUP_LIST } from '../../app.config';
import { Injectable, Inject } from '@angular/core';
import { LogMessage } from '../../shared/config/models/audit/log-message';
import { ORMLoginVerify } from '../../shared/config/models/orm-loginverify';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoadStartupService {
  waitForLogin = 0;
  constructor(@Inject(LOOKUP_LIST) public lookupList: LookupList,
    private generalService: GeneralService, private logMessage: LogMessage, private router: Router) {

  }

  loadAppData() {
    this.waitForLogin = 8;

    this.getPracticeInfo();
    this.getPatientAllergies();
    this.getDocumentPath();
    this.getProvider();
    this.getInsuranceDetails();
    //this.getPatientHeader();
    this.getPatientVitals();
    this.getPatientProblems();
    this.getPatientMedicationSummary();
  }


  getPatientProblems() {

    this.generalService.getPatientProblems(this.lookupList.patientInfo.patient_id).subscribe(
      data => {
        this.onPatientProblemsSuccessfull(data);
      },
      error => {
        this.onPatientProblemsError(error);
      }
    );
  }
  onPatientProblemsSuccessfull(data: any) {
    if (data.length > 0) {
      this.lookupList.PatientProblems = data;
      //this.waitForLogin--;
      this.isDataLoadCompleted();
    } else {
      this.lookupList.PatientProblems = null;
      this.isDataLoadCompleted();
    }
  }

  onPatientProblemsError(error: any) {
    this.lookupList.PatientProblems = null;
    this.isDataLoadCompleted();
    this.logMessage.log("getPatientProblems Error.");
  }


  getPatientMedicationSummary() {

    this.generalService.getPatientMedicationSummary(this.lookupList.patientInfo.patient_id).subscribe(
      data => {
        this.onPatientMedicationSuccessfull(data);
      },
      error => {
        this.onPatientMedicationSummaryError(error);
      }
    );
  }
  onPatientMedicationSuccessfull(data: any) {
    if (data.length > 0) {
      this.lookupList.patientMedication = data;
      //this.waitForLogin--;
      this.isDataLoadCompleted();
    } else {
      this.lookupList.patientMedication = null;
      this.isDataLoadCompleted();
    }
  }

  onPatientMedicationSummaryError(error: any) {
    this.lookupList.patientMedication = null;
    this.isDataLoadCompleted();
    this.logMessage.log("onPatientMedicationSummaryError Error.");
  }

  getInsuranceDetails() {

    this.generalService.getInsuranceDetails(this.lookupList.patientInfo.patient_id).subscribe(
      data => {
        this.onGetInsuranceDetailsSuccessfull(data);
      },
      error => {
        this.onGetInsuranceDetailsError(error);
      }
    );
  }
  onGetInsuranceDetailsError(error: any) {
    this.isDataLoadCompleted();
    this.logMessage.log("getInsuranceDetails Error.");
  }
  onGetInsuranceDetailsSuccessfull(data: any) {
    if (data != undefined || data != null) {
      this.lookupList.insuranceInfo.primary = data[0].col1;
      this.lookupList.insuranceInfo.secondary = data.length > 1 ? data[1].col1 : "";

      //this.waitForLogin--;
      this.isDataLoadCompleted();
    } else {
      this.lookupList.insuranceInfo.primary = "";
      this.lookupList.insuranceInfo.secondary = "";
      this.isDataLoadCompleted();
    }
  }
  getPatientVitals() {

    this.generalService.getPatientVitals(this.lookupList.patientInfo.patient_id).subscribe(
      data => {
        this.onHeaderVitalsSuccessfull(data);
      },
      error => {
        this.onHeaderVitalsError(error);
      }
    );
  }
  onHeaderVitalsSuccessfull(data: any) {

    if (data != undefined || data != null) {
      this.lookupList.patientVitals = data;
      this.isDataLoadCompleted();
    } else {
      this.lookupList.patientVitals = null;
      this.isDataLoadCompleted();
    }
  }
  onHeaderVitalsError(error: any) {
    this.lookupList.patientVitals = null;
    this.isDataLoadCompleted();
    this.logMessage.log("onHeaderVitalsError Error.");
  }
  isDataLoadCompleted() {
    this.waitForLogin--;
    if (this.waitForLogin == 0)
      this.lookupList.isPhrDataLoad = true;
      this.router.navigate(['/']);
  }
  getPracticeInfo() {
    this.generalService.getPracticeInfo(this.lookupList.patientInfo.practice_id).subscribe({
      next: (data: any) => {
        if (data != null && data != undefined) {
          this.lookupList.practiceInfo.practiceId = data['practice_id'];
          this.lookupList.practiceInfo.practiceName = data['practice_name'];
          this.lookupList.practiceInfo.address1 = data['address1'];
          this.lookupList.practiceInfo.address2 = data['address2'];
          this.lookupList.practiceInfo.city = data['city'];
          this.lookupList.practiceInfo.state = data['state'];
          this.lookupList.practiceInfo.zip = data['zip'];
          this.lookupList.practiceInfo.phone = data['phone'];
          this.lookupList.practiceInfo.fax = data['fax'];
          this.lookupList.practiceInfo.domain = data['domain_name'];
          this.isDataLoadCompleted();
        } else {
          this.isDataLoadCompleted();
        }
      },
      error: (error: any) => {
        this.isDataLoadCompleted();
        this.logMessage.log("getPracticeInfo: " + error);
      }
    });
  }
  getProvider() {
    //Load Provider

    this.generalService.getProvider(this.lookupList.patientInfo.practice_id).subscribe(

      data => {
        this.lookupList.providerList = data as Array<any>;
        this.isDataLoadCompleted();
      },
      error => {
        this.lookupList.providerList = [];
        this.isDataLoadCompleted();
        this.logMessage.log("getProvider: " + error);
      }
    );
  }

  getDocumentPath() {
    this.generalService.getDocumentPaths(this.lookupList.patientInfo.practice_id).subscribe(
      data => {
        this.lookupList.lstdocumentPath = data as Array<any>;
        this.isDataLoadCompleted();
      },
      error => {
        this.lookupList.lstdocumentPath = [];
        this.isDataLoadCompleted();
        this.logMessage.log("getDocumentPath:" + error);
      }
    );
  }
  getPatientAllergies() {

    this.generalService.getPatientAllergies(this.lookupList.patientInfo.patient_id).subscribe(
      data => {
        this.lookupList.patientAllergies = data as Array<any>;
        this.isDataLoadCompleted();
      },
      error => {
        this.lookupList.patientAllergies = null;
        this.isDataLoadCompleted();
        this.logMessage.log("getAllergies: " + error);
      }
    );
  }
}
