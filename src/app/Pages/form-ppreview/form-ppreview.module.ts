import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPpreviewRoutingModule } from './form-ppreview-routing.module';
import { FormPreviewComponent } from './formPreview/form-preview.component';

import { ReactiveFormsModule } from '@angular/forms';
// import {MatIconModule} from '@angular/material/icon';
import { AngularMaterialModule } from 'src/app/Shared/angular-material/angular-material.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    FormPreviewComponent,
  // ShowfieldsComponent
],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormPpreviewRoutingModule,
   AngularMaterialModule,
   SweetAlert2Module
  ],
  exports :[]
})
export class FormPpreviewModule { }
