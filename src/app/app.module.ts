import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultFormComponent } from './Pages/default-form/default-form/default-form.component';
import { SelecFormFieldsModule } from './Pages/selec-form-fields/selec-form-fields.module';


@NgModule({
  declarations: [
    AppComponent,
    
    DefaultFormComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    SelecFormFieldsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
