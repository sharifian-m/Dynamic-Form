import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';
import { defaultFields } from '../models/defaultFields';

@Injectable({
  providedIn: 'root',
})
export class FormFieldService {
  private field$ = new BehaviorSubject<defaultFields[]>([]);
  currentfildes$ = this.field$.asObservable();

  private loading$ = new BehaviorSubject<boolean>(false);
  currentLoading$ = this.loading$.asObservable();
  constructor() {}

  setField(field: defaultFields) {
    this.field$.next([...this.field$.value, field]);
      }
      
  setField2(field: defaultFields[]) {
    this.field$.next(field);
  }

  setLoading(Boolean: boolean) {
    this.loading$.next(Boolean);
  }
  // editFieldInformation(formValue:defaultFields){
  //   let values=this.getFormValues();
  //   console.log('values', values.id);
    
  //   let index = this.formFields.findIndex(x=> { return x.id==values.id});
  //   console.log('index',index);
    
  //   this.formFields[index]=values;
  //   console.log('formFields after edit',this.formFields);
  // }
}
