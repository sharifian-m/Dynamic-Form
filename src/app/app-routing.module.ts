import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultFormComponent } from './Pages/default-form/default-form/default-form.component';
import { FormPreviewComponent } from './Pages/form-ppreview/formPreview/form-preview.component';


const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {path: 'custom',
  loadChildren: () =>
    import('./Pages/form-ppreview/form-ppreview.module').then(m => m.FormPpreviewModule)
 },
 {path: 'default',
 loadChildren: () =>
   import('./Pages/default-form/default-form.module').then(m => m.DefaultFormModule)
},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
