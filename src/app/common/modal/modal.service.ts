import { Injectable, Type } from '@angular/core';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalTitle: string = '';
  modalButtonText: string = '';
  modalType: string = '';
  dynamicComponent: Type<any> | null = null;

  openDynamicModal(title: string, buttonText: string, type: string, component: Type<any>) {
    this.modalTitle = title;
    this.modalButtonText = buttonText;
    this.modalType = type;
    this.dynamicComponent = component;

    // Open the modal using Bootstrap API
    const modalElement = document.getElementById('dynamicModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      modalInstance.show();
    } else {
      console.warn('Modal element not found with ID: dynamicModal');
    }
  }
}
