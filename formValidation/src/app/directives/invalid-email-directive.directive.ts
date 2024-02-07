import { Directive, Input, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { DataService } from '../services/data-service.service';

@Directive({
  selector: '[appInvalidEmail][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidEmailDirective,
      multi: true,
    },
  ],
})
export class InvalidEmailDirective implements Validator, OnInit {
  @Input('appInvalidEmail') emailPattern?: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.updateValidity(true);
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (!this.emailPattern) {
      console.error('Email pattern not provided for appInvalidEmail directive.');
      return null;
    }

    const regex = new RegExp(this.emailPattern);

    const isValid = regex.test(control.value);

    this.dataService.updateValidity(isValid);

    return isValid ? null : { 'invalidEmail': true };
  }
}
