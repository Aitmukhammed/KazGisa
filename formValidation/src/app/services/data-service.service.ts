import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../ModalComponent/modal-component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  formDataFormPage: any = {};
  formDataMail: any = {};
  formDataFileUpload: any = {};
  selectedFile: File | null = null;
  private isValidSource = new Subject<boolean>();
  isValid$ = this.isValidSource.asObservable();

  constructor(private dialog: MatDialog) {}

  saveFormDataFormPage(data: any): void {
    this.formDataFormPage = { ...data };
  }

  saveFormDataFileUpload(data: any): void {
    this.formDataFileUpload = { ...data };
  }

  getFormDataFormPage(): any {
    return { ...this.formDataFormPage };
  }

  saveFormDataMail(data: any): void {
    this.formDataMail = { ...data };
  }

  getFormDataFileUpload(): any {
    return { ...this.formDataFileUpload };
  }

  openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '250px',
      data: { message: 'Данные успешно заполнены!' },
    });
  }

  updateValidity(isValid: boolean) {
    this.isValidSource.next(isValid);
  }
}
