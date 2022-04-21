import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
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

  setLoading(Boolean:boolean) {
    this.loading$.next(Boolean);
  }
  removeBehaviorsubjectItem(name: string) {
    // const example = this.field$.pipe(filter(name => name===name)
  }
}

// const field: defaultFields[] = this.field$.getValue();
// field.forEach((item, index) => {
//   if (item.name === data) {
//     field.splice(index, 1);
//   }
// });
// console.log(field);

// return this.field$.next(field);