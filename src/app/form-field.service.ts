import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultFields } from './models/defaultFields';
// import { EmailField } from './models/email';
// import { NumberField } from './models/numberFirld';
// import { TextareaField } from './models/TextareaField';

@Injectable({
  providedIn: 'root'
})
export class FormFieldService {
 behavsampl={
  name: 'aa',
  label: 'aaa',
  required: true,
  
  controlType: 'radio',
  // type: string;
 
  description: 'aaaaaaaaa'
}

  private field$ = new BehaviorSubject<defaultFields[]>([]);
 currentfildes$ = this.field$.asObservable();


  
// private field$ = new BehaviorSubject<defaultFields>(this.behavsampl);
// currentfildes$ = this.field$.asObservable();
  constructor() { }
  //  setField(field: defaultFields) {
  //   this.field$.next(field);
  // }
  setField(field: defaultFields) {
    this.field$.next([...this.field$.value, field]);
  }
}
