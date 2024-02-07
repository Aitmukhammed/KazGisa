import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit{

  constructor(public dataService: DataService, private router: Router, private _snackBar: MatSnackBar) {}

  individual: boolean = true;
  legalEntity: boolean = false;

  // Физ - лицо
  lastName: string = '';
  firstName: string = '';
  middleName: string = '';
  iin: number = 0; // iin и bin - почему то у вас как строка стоит 
  birthDate?: Date;

  // Юр - лицо
  organizationType: string = 'AO';
  organizationTypes: string[] = ['AO', 'TOO'];
  organizationName: string = '';
  bin: string = '';

  onSubmit() {
    if (this.individual) {
      if (this.checkFieldsIndividual()) {
        return;
      }
      this.dataService.saveFormDataFormPage({
        lastName: this.lastName,
        firstName: this.firstName,
        middleName: this.middleName,
        birthDate: this.birthDate,
        iin: this.iin
      });
    } else if (this.legalEntity) {
      if (this.checkFieldsLegalEntity()) {
        return;
      }
      this.dataService.saveFormDataFormPage({
        organizationName: this.organizationName,
        organizationType: this.organizationType,
        bin: this.bin
      });
    }
    this.router.navigate(['/upload']);
  }

  ngOnInit() {
    const savedData = this.dataService.getFormDataFormPage();
    if (savedData) {
      this.lastName = savedData.lastName;
      this.firstName = savedData.firstName;
      this.middleName = savedData.middleName;
      this.birthDate = savedData.birthDate;
      this.iin = savedData.iin;

      this.organizationName = savedData.organizationName;
      this.organizationType = savedData.organizationType;
      this.bin = savedData.bin;
    }
  }

  onRadioChange(option: string) {
    if (option === 'individual') {
      this.individual = true;
      this.legalEntity = false;
    } else if (option === 'legalEntity') {
      this.individual = false;
      this.legalEntity = true;
    }
  }

  checkFieldsLegalEntity(): boolean {
    if(!this.organizationName) {
      this.openSnackBar("Заполните наименование организации!");
    } else if(!this.bin) {
      this.openSnackBar("Заполните БИН!");
    } else {
      return false;
    }
    return true;
  }

  checkFieldsIndividual(): boolean {
    if (!this.lastName) {
      this.openSnackBar('Заполните фамилию!');
    } else if (!this.firstName) {
      this.openSnackBar('Заполните имя!');
    } else if (!this.birthDate) {
      this.openSnackBar('Выберите дату рождения!');
    } else if(!this.iin) {
      this.openSnackBar('Заполните иин!');
    }
    else {
      return false;
    }
    return true;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Х', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

}
