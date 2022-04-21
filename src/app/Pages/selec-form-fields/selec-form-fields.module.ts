import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelecFormFieldsRoutingModule } from './selec-form-fields-routing.module';
import { SelectformFieldsComponent } from './selectform-fields/selectform-fields.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SelectformFieldsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SelecFormFieldsRoutingModule,
    SweetAlert2Module
  ],
  exports:[SelectformFieldsComponent]
})
export class SelecFormFieldsModule { }
