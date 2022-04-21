import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { FormFieldService } from './form-field.service';
import { defaultFields } from './models/defaultFields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Dynamic-Forms';
  formFields!: defaultFields;
  formField: defaultFields[]=[];
form!:FormGroup;

constructor(private router:Router,
  private formService:FormFieldService){}


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      label: new FormControl('', [Validators.required]),
      required: new FormControl(false),
      controlType: new FormControl(null,  [Validators.required]),
      description: new FormControl(),
    });
   
  }


  addToForm(){
   this.formFields = this.form.value;
    console.log( this.formFields);
    this.formService.setField( this.formFields);
  }

  addNewField(){
    this.form.reset();
  }

}
