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
  formField!: defaultFields;
  formFields: defaultFields[] = [];
  form!: FormGroup;
  loading!: boolean;
  formMode: 'new' | 'edit' = 'new';
  constructor(private formService: FormFieldService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      title: new FormControl('', [Validators.required]),
      required: new FormControl(false),
      controlType: new FormControl(null, [Validators.required]),
      description: new FormControl(),
    });

    this.formService.currentfildes$.subscribe((x) => {
      this.formFields = x;
      console.log(this.formField);
    });
  }

  addToForm() {
    this.formService.currentLoading$.subscribe((x) => {
      this.loading = x;
    });
    if (this.loading === false) {
      this.formService.setLoading(!this.loading);
    }
    this.formField = { ...this.form.value, id: this.formFields.length + 1 };
    console.log('form.value is', this.formField);
    console.log('this.formField', this.formField);
    this.formFields = [...this.formFields, this.formField];
    console.log('this.formFields', this.formFields);
  }
  // get name() {return this.form.get('name')};

  getFormValues() {
    return (this.formField = new defaultFields(
      this.formFields.length,
      // this.form.get['name'].value,
      this.form.controls['name'].value,
      this.form.controls['title'].value,
      this.form.controls['required'].value,
      this.form.controls['controlType'].value,
      this.form.controls['description'].value
    ));
  }
  getEdiInformation(event: defaultFields) {
    this.formMode = 'edit';
    this.form = new FormGroup({
      id: new FormControl(event.id),
      name: new FormControl(event.name, [
        Validators.required,
        Validators.minLength(3),
      ]),
      title: new FormControl(event.title, [Validators.required]),
      required: new FormControl(event.required),
      controlType: new FormControl(event.controlType, [Validators.required]),
      description: new FormControl(event.description),
    });
    console.log('this.form', this.form.value);
  }

  editField() {
    let values = this.getFormValues();
    console.log('values', values.id);

    let index = this.formFields.findIndex((x) => {
      return x.id == values.id;
    });
    console.log('index', index);

    this.formFields[index] = values;
    console.log('formFields after edit', this.formFields);
  }

  NewField() {
    this.form.reset();
    this.formMode='new'
  }
  newForm() {
    // this.Swal.fire();
    this.formFields.splice(0, this.formFields.length);
    this.formFields = [...this.formFields];
    console.log('new form ',  this.formFields); 
      this.form.reset();
    
    // this.formService.setField2(this.formFields);
  }
}
