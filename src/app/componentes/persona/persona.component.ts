import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  persona: Persona = new Persona(1,'', '', '', '', '',);
  
  roles: string[];
  isAdmin: boolean = false;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.personaService.traerPersona(this.persona.id_pers).subscribe((data) => {
      this.persona = data;
    });
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    console.log(this.persona)
  }
  mail: boolean = false;
  whatsapp : boolean = false;

  mostrarMail(){
    this.mail = !this.mail;
  }
  mostrarWhats(){
    this.whatsapp = !this.whatsapp;
  }

  
}
