import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPreviewComponent } from './formPreview/form-preview.component';

const routes: Routes = [
  {path:'' , component:FormPreviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPpreviewRoutingModule { }
