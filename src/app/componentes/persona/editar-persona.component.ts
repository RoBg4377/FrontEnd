import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona: Persona;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.traerPersona(id).subscribe(
      (data)=> {
        this.persona = data;
      },
      (err) => {
        this.router.navigate(['persona']);
      }
    )
  }
  editarPersona(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.editarPersona(id, this.persona).subscribe(
      ()=> {
        this.router.navigate(['persona']);
        alert('Actualizado correctamente')
      },
      ()=> {
        alert('Actualizado con éxito');
        this.router.navigate(['persona'])
      }
    )
  }

}
