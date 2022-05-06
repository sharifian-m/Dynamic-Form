import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string, charReplace: string): string {
    
    let last4Digits = value.slice(-4);
    return last4Digits.padStart(value.length, charReplace);
  }
}
