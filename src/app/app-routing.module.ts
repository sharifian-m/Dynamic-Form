import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
 
 {path: 'default',
 loadChildren: () =>
   import('./Pages/default-form/default-form.module').then(m => m.DefaultFormModule) 
},
{path: 'custom',
loadChildren: () =>
  import('./Pages//custom-form/custom-form.module').then(m => m.CustomFormModule)
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
