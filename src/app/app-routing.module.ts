import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Pag404Component } from './componentes/pag404/pag404.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: '**', component: Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
