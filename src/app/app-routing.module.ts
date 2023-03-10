import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pag404Component } from './componentes/pag404/pag404.component';

import { PersonaComponent } from './componentes/persona/persona.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { GuardServiceService as guard } from './guards/guard-service.service';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { EditarSkillsComponent } from './componentes/skills/editar-skills.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';
import { EditarPersonaComponent } from './componentes/persona/editar-persona.component';



const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'persona', component: PersonaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'experiencia', component: ExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'educacion', component: EducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'skills', component: SkillsComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'proyectos', component: ProyectosComponent,canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'editpers/:id', component: EditarPersonaComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'editedu/:id', component: EditarEducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'editskills/:id', component: EditarSkillsComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'editexp/:id', component: EditarExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  {path: 'editpro/:id', component: EditarProyectosComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},

  {path: '**', component: Pag404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
