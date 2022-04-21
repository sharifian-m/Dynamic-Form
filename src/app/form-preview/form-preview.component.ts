import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormFieldService } from '../form-field.service';
import { defaultFields } from '../models/defaultFields';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss']
})
export class FormPreviewComponent implements OnInit {

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
    console.log(this.dynamicForm.value);
    
  }
  defaultform(){
    this.router.navigate(['default']);
  }
  removeField(){
  //   removeRoomArr(data: any) {
  //     const roomArr: any[] = this.roomArr_source.getValue();
    
  //     roomArr.forEach((item, index) => {
  //       if (item === data) { roomArr.splice(index, 1); }
  //     });
    
  //     this.roomArr_source.next(roomArr);
  //   }
  }

}
