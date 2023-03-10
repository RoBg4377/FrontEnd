import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-form-about',
  templateUrl: './form-about.component.html',
  styleUrls: ['./form-about.component.css']
})
export class FormAboutComponent implements OnInit {
  id= 1;
  nombre = '';
  apellido = '';
  titulo = '';
  prese = '';
  foto = '';

  persona: Persona = null;

  constructor(
    private personaService : PersonaService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ) {}

  ngOnInit(): void {
    
  }

  actualizaPersona(){
    const persona  = new Persona (1, this.nombre, this.apellido, this.titulo, this.foto, this.prese);
    this.personaService.update(persona).subscribe(
      data =>{        
        this.router.navigate(['persona']);
        alert('Actualizado correctamente');
        window.location.reload();
      },
      err => {
        window.location.reload();
        this.router.navigate(['persona'])
      }
    )


  }

  crearPersona(){

  }

}
