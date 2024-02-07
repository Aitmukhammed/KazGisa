import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appIinDirective]'
})
export class IinDirectiveDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    const inputElement = this.el.nativeElement as HTMLInputElement;
    let inputValue = inputElement.value;

    inputValue = inputValue.replace(/[^0-9]/g, '');

    if (inputValue.length > 12) {
      inputValue = inputValue.substring(0, 12);
    }

    inputElement.value = inputValue;
  }

}
