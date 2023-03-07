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

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PersonaComponent } from './componentes/persona/persona.component';
import { FormRegisterComponent } from './modales/form-register/form-register.component';
import { FormAboutComponent } from './modales/form-about/form-about.component';
import { interceptorProvider } from './servicios/interceptor.service';






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
    FormAboutComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
