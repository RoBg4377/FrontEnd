import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos : Proyectos[];

  constructor(public proyectoService : ProyectosService) { }

  ngOnInit(): Proyectos[] {
    this.proyectoService.proyectosList().subscribe(data => {this.proyectos = data})
    return this.proyectos;
  }

  

}
