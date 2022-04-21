import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormPreviewComponent } from './form-preview/form-preview.component';
import { DynamicFormComponent } from './form-preview/dynamic-form/dynamic-form.component';
import { DefaultFormComponent } from './form-preview/default-form/default-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPreviewComponent,
    DynamicFormComponent,
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
