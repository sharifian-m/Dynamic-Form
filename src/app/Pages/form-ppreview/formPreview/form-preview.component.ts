import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultFields } from 'src/app/Core/models/defaultFields';
import { FormFieldService } from 'src/app/Core/Services/form-field.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent implements OnInit {
  loading = false;
  formValue = ' ';
  formFieldsArray: defaultFields[] = [];
  dynamicForm!: FormGroup;

  constructor(private router: Router, private formService: FormFieldService) {}

  ngOnInit(): void {

  }

  submit() {
    this.formValue = this.dynamicForm.value;
  }

  defaultform() {
    this.router.navigate(['default']);
    this.formService.setLoading(this.loading);
  }
  removeField(name: string) {
    //     this.formService.removeBehaviorsubjectItem(name).subscribe(x=>{
    //   this.formFieldsArray=x;
    //   console.log(x);
    // })
  }
}
