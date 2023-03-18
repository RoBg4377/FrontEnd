import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.css']
})
export class FormExperienciaComponent implements OnInit {

  id_exp?: number;
  compania :String;
  puesto : String;
  tarea : String;
  img: String;
  fechaIni : number;
  fechaFin : number;

  constructor(
    private experienciaService: ExperienciaService,
    private router : Router
  ) { }

  ngOnInit(): void {}

  creaExperiencia(){
    const experiencia = new Experiencia(this.compania, this.puesto, this.tarea, this.img, this.fechaIni, this.fechaFin);
    this.experienciaService.creaExp(experiencia).subscribe(
      data =>{
        alert('experiencia agregada');
        this.router.navigate(['experiencia']);
      }
    )
    window.location.reload();
  }

}
