import { Injectable, Inject } from '@angular/core';
import { AuthenticationCredentials } from '../../authentication/authenticationCredentials';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig, APP_CONFIG } from '../../app.config';
import { SearchCriteria } from '../../common/search-criteria';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) { }

  getAccessToken(auth: AuthenticationCredentials) {
    return this.http.post(`${this.config.authServiceEndpoint}/CustomAccount/LoginPhr`, auth);
  }

  getPatientProblems(patientId:Number) {
    //return this.http.get(this.config.apiEndpoint + 'general/getPatientProblems/' + patientId, this.httpOptions);
    return this.http.get(this.config.apiEndpoint + 'patient/getproblemsummary/' + patientId, this.httpOptions);
  }

  getPatientMedicationSummary(patientId: Number) {
    //return this.http.get(this.config.apiEndpoint + 'patient/getallergiesummary/' + patientId, this.httpOptions);
    return this.http.get(this.config.apiEndpoint + 'patient/getmedicationsummary/' + patientId, this.httpOptions);
  }

  getInsuranceDetails(patientId: Number) {
    return this.http.get(this.config.apiEndpoint + 'general/getInsuranceDetails/' + patientId, this.httpOptions);
  }

  getPatientVitals(patientId: Number) {
    return this.http.get(this.config.apiEndpoint + 'general/getPatientVitalsPHR/' + patientId, this.httpOptions);
  }

  getPracticeInfo(practiceId: number) {
    return this.http.get(this.config.apiEndpoint + 'general/getPracticeInfo/' + practiceId, this.httpOptions);
  }

  getProvider(practice_id: number) {
    return this.http.get(
      this.config.apiEndpoint + 'general/getProviderList/' + practice_id, this.httpOptions);
  }

  getDocumentPaths(practice_id: number) {
    return this.http.get(
      this.config.apiEndpoint + 'general/getDocumentPaths/' + practice_id, this.httpOptions);
  }

  getPatientAllergies(patientId: Number) {
    //return this.http.get(this.config.apiEndpoint + 'general/getPatientAllergies/' + patientId, this.httpOptions);
    return this.http.get(this.config.apiEndpoint + 'patient/getallergiesummary/' + patientId, this.httpOptions);
  }


  getPHREncounterSummary(criteria: SearchCriteria) {
    return this.http.post(this.config.apiEndpoint + 'general/getPHREncounterSummary', criteria);
  }
}
