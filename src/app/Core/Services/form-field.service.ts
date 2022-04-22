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
    // console.log(this.field$.next([...this.field$.value, field]));
    
  }
  setField2(field: defaultFields[]) {
    this.field$.next(field);
  }

  setLoading(Boolean: boolean) {
    this.loading$.next(Boolean);
  }
//   removeFieldItem(name: string):Observable<defaultFields[]> {
//     const field: defaultFields[] = this.field$.getValue();
//     let results :defaultFields[];
//     for (let i = 0; i < field.length; i++) {
//       if(field[i].name===name){
//          results =field.splice(i, 1); 
//         }
//      return   this.field$.next(results);
                   
//       }
// }
}
