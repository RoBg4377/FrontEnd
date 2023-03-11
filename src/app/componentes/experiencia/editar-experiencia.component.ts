import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia;

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.params['id'];
    console.log(id)
    this.experienciaService.traeExp(id).subscribe(
      (data)=>{
        this.experiencia = data;
      }
    )
  }

  editarExperiencia(): void {
    const id = this.activeRoute.snapshot.params['id'];
    this.experienciaService.editaExp(id, this.experiencia).subscribe(
      () => {
        this.router.navigate(['experiencia']),
        alert('actualizado correctamente')
      },
      () => {
        alert('actualizado correctamente')
        this.router.navigate(['experiencia'])
      }
    ) 
  }

}
