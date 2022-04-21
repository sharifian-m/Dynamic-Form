import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPpreviewRoutingModule } from './form-ppreview-routing.module';
import { FormPreviewComponent } from './formPreview/form-preview.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ShowfieldsComponent } from './showfields/showfields.component';


@NgModule({
  declarations: [
    FormPreviewComponent,
  ShowfieldsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormPpreviewRoutingModule
  ],
  exports :[ShowfieldsComponent]
})
export class FormPpreviewModule { }
