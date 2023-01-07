import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContactoComponent } from './componentes/form-contacto/form-contacto.component';
import { FormLoginComponent } from './componentes/form-login/form-login.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { Pag404Component } from './componentes/pag404/pag404.component';



@NgModule({
  declarations: [
    AppComponent,
    FormContactoComponent,
    FormLoginComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    InicioComponent,
    NavComponent,
    FooterComponent,
    DashboardComponent,
    Pag404Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
