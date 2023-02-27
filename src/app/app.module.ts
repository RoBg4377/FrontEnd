import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContactoComponent } from './componentes/form-contacto/form-contacto.component';
import { FormLoginComponent } from './componentes/form-login/form-login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Pag404Component } from './componentes/pag404/pag404.component';

import { IndiceComponent } from './componentes/indice/indice.component';
import { AcercaDeMiComponent } from './modales/acerca-de-mi/acerca-de-mi.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonaComponent } from './componentes/persona/persona.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { FormRegisterComponent } from './form-register/form-register.component';





@NgModule({
  declarations: [
    AppComponent,
    FormContactoComponent,
    FormLoginComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    InicioComponent,
    NavComponent,
    FooterComponent,
    Pag404Component,

    IndiceComponent,
    AcercaDeMiComponent,
    PersonaComponent,
    DashboardComponent,
    FormRegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
