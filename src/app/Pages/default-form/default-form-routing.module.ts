import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultFormComponent } from './default-form/default-form.component';

const routes: Routes = [
  {path:'' , component:DefaultFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultFormRoutingModule { }
