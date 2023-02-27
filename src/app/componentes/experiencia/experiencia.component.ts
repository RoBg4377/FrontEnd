import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  logeado: boolean = true;

  experiencias : Experiencia[];

  constructor(public experienciaService : ExperienciaService) { }

  ngOnInit(): Experiencia[] {
    this.experienciaService.experienciaList().subscribe(data => {this.experiencias = data})
    return this.experiencias;
  }

}
