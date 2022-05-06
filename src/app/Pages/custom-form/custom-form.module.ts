import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormRoutingModule } from './custom-form-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/Shared/angular-material/angular-material.module';
import { CustomFormDesignComponent } from './custom-form-design/custom-form-design.component';
import { FormPreviewComponent } from './selectform-fields/formPreview/form-preview.component';
import { SelectformFieldsComponent } from './selectform-fields/selectform-fields.component';
import { PhoneNumberPipe } from 'src/app/Core/Pipe/phone-number.pipe';



@NgModule({
  declarations: [FormPreviewComponent,
  SelectformFieldsComponent,
  CustomFormDesignComponent,
  PhoneNumberPipe

],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormRoutingModule,  
    ReactiveFormsModule,
    SweetAlert2Module,
    AngularMaterialModule,
  ],
  exports:[SelectformFieldsComponent,FormPreviewComponent]
})
export class CustomFormModule { }
