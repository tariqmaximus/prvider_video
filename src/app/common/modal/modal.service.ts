import { Injectable, Type, } from '@angular/core';
import { Subject } from 'rxjs';
declare var bootstrap: any;


@Injectable({
  providedIn: 'root',
})

export class ModalService {
  modalTitle: string = '';
  modalButtonText: string = '';
  modalType: string = '';
  dynamicComponent: Type<any> | null = null;
  applyCallback: any; 

  private dateRangeSubject = new Subject<{ startDate: any, endDate: any}>();
  dateRanges$ = this.dateRangeSubject.asObservable();
  

  openDynamicModal(
    title: string, 
    buttonText: string, 
    type: string, 
    component: Type<any>, 
    applyCallback?: (data: any) => void
  ) {
    this.modalTitle = title;
    this.modalButtonText = buttonText;
    this.modalType = type;
    this.dynamicComponent = component;
    this.applyCallback = applyCallback || null;
  
    const modalElement = document.getElementById('dynamicModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.warn('Modal element not found with ID: dynamicModal');
    }
  }
  


  emitDateRange(stDate: Date, enDate: Date): void {
    let startDate = this.formateDate(stDate);
    let endDate = this.formateDate(enDate);
    this.dateRangeSubject.next({ startDate, endDate});
  }

  formateDate(date: Date): any{
    const currentDay = date.getDate();
    const currentMonth = date.getMonth() + 1;
    const currentYear = date.getFullYear();
    const completeDate = `${currentMonth}/${currentDay}/${currentYear}`;
    return completeDate;
  }
  
  
}
