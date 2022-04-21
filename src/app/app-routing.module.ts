import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultFormComponent } from './form-preview/default-form/default-form.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';

const routes: Routes = [

  { path: 'custom', component: FormPreviewComponent},
  { path: 'default', component: DefaultFormComponent},
  { path: '', component: DefaultFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
