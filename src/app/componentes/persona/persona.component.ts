import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  persona: Persona = new Persona('', '', '', '', '');

  constructor(public personaService : PersonaService) { }

  ngOnInit(): void {
    console.log('oninit funciona')
    this.personaService.getPersona().subscribe(data=>{this.persona = data})
  }

}
