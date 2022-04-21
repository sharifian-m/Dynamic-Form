import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { defaultFields } from 'src/app/Core/models/defaultFields';
import { FormFieldService } from 'src/app/Core/Services/form-field.service';

@Component({
  selector: 'app-showfields',
  templateUrl: './showfields.component.html',
  styleUrls: ['./showfields.component.scss']
})
export class ShowfieldsComponent implements OnInit {
@Input() formField!:defaultFields;
  loading = false;
  formValue = ' ';
  formFieldsArray: defaultFields[] = [];
  dynamicForm!: FormGroup;

  constructor(private router: Router, private formService: FormFieldService) {}

  ngOnInit(): void {
    this.dynamicForm = new FormGroup({
      fields: new FormArray([]),
    });
    // this.formService.currentfildes$.subscribe((x) => {
    //   this.formFieldsArray = x;
    //   console.log( this.formFieldsArray);
      
    // });
  }
 
  removeField(aname:String){}
}
