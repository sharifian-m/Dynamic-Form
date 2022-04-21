import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectformFieldsComponent } from './selectform-fields/selectform-fields.component';

const routes: Routes = [
  {path:'true' , component: SelectformFieldsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecFormFieldsRoutingModule { }
