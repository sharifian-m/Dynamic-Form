import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultFormComponent } from './Pages/default-form/default-form/default-form.component';
import { SelecFormFieldsModule } from './Pages/selec-form-fields/selec-form-fields.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './Shared/angular-material/angular-material.module';
import { MainHeaderComponent } from './Layouts/main-header/main-header.component';



@NgModule({
  declarations: [
    AppComponent,
    
    DefaultFormComponent,
          MainHeaderComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    SelecFormFieldsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
