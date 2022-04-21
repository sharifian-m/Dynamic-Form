import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { defaultFields } from 'src/app/Core/models/defaultFields';
import { FormFieldService } from 'src/app/Core/Services/form-field.service';

@Component({
  selector: 'app-selectform-fields',
  templateUrl: './selectform-fields.component.html',
  styleUrls: ['./selectform-fields.component.scss'],
})
export class SelectformFieldsComponent implements OnInit {
  @ViewChild('Swal') public readonly Swal!: SwalComponent;

  title = 'Dynamic-Forms';
  formFields!: defaultFields;
  formField: defaultFields[] = [];
  form!: FormGroup;
  loading!:boolean;

  constructor(private formService: FormFieldService,
    private activeroute:ActivatedRoute) {
 
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      label: new FormControl('', [Validators.required]),
      required: new FormControl(false),
      controlType: new FormControl(null, [Validators.required]),
      description: new FormControl(),
    });

    
    this.formService.currentLoading$.subscribe((x) => {
      this.loading = !!x;
      console.log(this.loading);
      
    });
  }

  addToForm() {
    this.formFields = this.form.value;
    console.log(this.formFields);
    this.formService.setField(this.formFields);
  }

  addNewField() {
    this.form.reset();
  }
  newForm() {
    this.Swal.fire();
  }
}
