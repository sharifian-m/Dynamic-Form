import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultFields } from 'src/app/Core/models/defaultFields';
import { FormFieldService } from 'src/app/Core/Services/form-field.service';


@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {
formValue=' ';
// @Input() formFields!: defaultFields;
formFieldsArray: defaultFields[]=[];
dynamicForm!:FormGroup;

constructor(private router:Router,
    private formService:FormFieldService) {
    }

  ngOnInit(): void {
    this.dynamicForm=new FormGroup({
      fields:new FormArray([])
    })
 this.formService.currentfildes$.subscribe(x=>{
  this.formFieldsArray=x;
 })}

  submit(){
    this.formValue=this.dynamicForm.value;
  }

  defaultform(){
    this.router.navigate(['default']);
  }
  removeField(name:string){
//     this.formService.removeBehaviorsubjectItem(name).subscribe(x=>{
//   this.formFieldsArray=x;
//   console.log(x);
  
// })
  }

}
