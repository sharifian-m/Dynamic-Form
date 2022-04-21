import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowFieldsRoutingModule } from './show-fields-routing.module';
import { ShowfieldsComponent } from './showfields/showfields.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShowfieldsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShowFieldsRoutingModule
  ],
exports:[ShowfieldsComponent]
})
export class ShowFieldsModule { }
