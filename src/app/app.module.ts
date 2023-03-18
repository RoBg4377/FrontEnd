import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContactoComponent } from './modales/form-contacto/form-contacto.component';
import { FormLoginComponent } from './modales/form-login/form-login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavComponent } from './componentes/nav/nav.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Pag404Component } from './componentes/pag404/pag404.component';

import { IndiceComponent } from './componentes/indice/indice.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonaComponent } from './componentes/persona/persona.component';
import { FormRegisterComponent } from './modales/form-register/form-register.component';
import { interceptorProvider } from './servicios/interceptor.service';
import { FormEducacionComponent } from './modales/form-educacion/form-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion.component';
import { FormSkillsComponent } from './modales/form-skills/form-skills.component';
import { EditarSkillsComponent } from './componentes/skills/editar-skills.component';
import { FormExperienciaComponent } from './modales/form-experiencia/form-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia.component';
import { FormProyectosComponent } from './modales/form-proyectos/form-proyectos.component';
import { EditarProyectosComponent } from './componentes/proyectos/editar-proyectos.component';
import { EditarPersonaComponent } from './componentes/persona/editar-persona.component';
import { SpinerComponent } from './modales/spiner/spiner.component';

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
    PersonaComponent,
    FormRegisterComponent,
    FormEducacionComponent,
    EditarEducacionComponent,
    FormSkillsComponent,
    EditarSkillsComponent,
    FormExperienciaComponent,
    EditarExperienciaComponent,
    FormProyectosComponent,
    EditarProyectosComponent,
    EditarPersonaComponent,
    SpinerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
