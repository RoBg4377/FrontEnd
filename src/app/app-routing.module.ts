import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AboutComponent } from './componentes/about/about.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pag404Component } from './componentes/pag404/pag404.component';
import { IndiceComponent } from './componentes/indice/indice.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'indice', pathMatch: 'full'},
  {path: 'indice', component: IndiceComponent},
  {path: 'about', component: AboutComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '**', component: Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
