import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css'],
})
export class FormProyectosComponent implements OnInit {

  id_pro?: number;
  nombre_pro: String;
  descripcion_pro: String;
  fecha_pro: number;
  enlace_pro: String;

  constructor(
    private proyectosService: ProyectosService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  crearProyecto(){
    const neuevoProyecto = new Proyectos(this.nombre_pro, this.descripcion_pro, this.fecha_pro, this.enlace_pro);
    this.proyectosService.creaProyecto(neuevoProyecto).subscribe(
      ()=>{
        alert('proyecto agregado');
        this.router.navigate(['proyectos']);
      }
    )
    window.location.reload();
  }
}
