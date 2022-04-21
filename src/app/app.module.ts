import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultFormComponent } from './Pages/default-form/default-form/default-form.component';
import { FormPreviewComponent } from './Pages/form-ppreview/formPreview/form-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    FormPreviewComponent,
    // DynamicFormComponent,
    DefaultFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
