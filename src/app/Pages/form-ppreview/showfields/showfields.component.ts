import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
    // this.dynamicForm = new FormGroup({
    //   fields: new FormArray([]),
    // });
    this.dynamicForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      label: new FormControl('', [Validators.required]),
      required: new FormControl(false),
      controlType: new FormControl(null, [Validators.required]),
      description: new FormControl(),
    }); 
  }
 
  removeField(name:String){}

}
