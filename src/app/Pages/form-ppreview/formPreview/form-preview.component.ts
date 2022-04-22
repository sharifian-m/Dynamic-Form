import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultFields } from 'src/app/Core/models/defaultFields';
import { FormFieldService } from 'src/app/Core/Services/form-field.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.scss'],
})
export class FormPreviewComponent implements OnInit {
  @ViewChild('Swal') public readonly Swal!: SwalComponent;
  formValue = ' ';
  formFieldsArray: defaultFields[] = [];
  dynamicForm!: FormGroup;

  constructor(private router: Router, private formService: FormFieldService) {}

  ngOnInit(): void {
    this.dynamicForm = new FormGroup({
      textbox: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      number: new FormControl('', [Validators.required]),
      checkbox: new FormControl(false),
      email: new FormControl(null, [Validators.required]),
      date: new FormControl(),
      radio: new FormControl(),
      dropdown: new FormControl(),
      textarea: new FormControl(),
    });

    this.formService.currentfildes$.subscribe((x) => {
      this.formFieldsArray = x;
      console.log(' this.formFieldsArray ', this.formFieldsArray);
    });
  }

  submit() {
    this.formValue = this.dynamicForm.value;
    console.log(this.formValue );
    
  }

  defaultform() {
    // this.formService.currentLoading$.subscribe((x) => {
    //   this.loading = x;
    // });
    // console.log(this.loading);
    this.formService.setLoading(false);
    this.router.navigate(['default']);
  }
<<<<<<< HEAD
  removeField(id: number) {
    this.Swal.fire();
    for (let i = 0; i <= this.formFieldsArray.length - 1; i++) {
      if (this.formFieldsArray[i].id === id) {
        this.formFieldsArray.splice(i, 1);
      }
    }
    this.formService.setField2(this.formFieldsArray);
   
=======
  removeField(name: string) {

>>>>>>> formArray
  }
}
