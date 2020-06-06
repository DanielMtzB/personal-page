import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

const routes: Routes = [
  { path: '', redirectTo: 'quien-soy', pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'quien-soy', component: QuienSoyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
