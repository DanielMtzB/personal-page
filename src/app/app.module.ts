import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    QuienSoyComponent,
    FormacionComponent,
    ProyectosComponent,
    ExperienciaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
