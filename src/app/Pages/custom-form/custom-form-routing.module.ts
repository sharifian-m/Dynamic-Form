import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormDesignComponent } from './custom-form-design/custom-form-design.component';
import { SelectformFieldsComponent } from './selectform-fields/selectform-fields.component';


const routes: Routes = [
  { path: '', component: SelectformFieldsComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFormRoutingModule { }
