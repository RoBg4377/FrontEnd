import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  roles: string[];
  isAdmin: boolean = false;
  experiencias : Experiencia[];

  constructor(public experienciaService : ExperienciaService, private tokenService : TokenService) { }

  ngOnInit(): Experiencia[] {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.experienciaService.experienciaList().subscribe(
      data => {
        this.experiencias = data;
      });
    return this.experiencias;
  }

  borrarExperiencia(id_exp: number) {
    this.experienciaService.borraExp(id_exp).subscribe(
      () => {
        alert('eliminado')
        window.location.reload();
      },
      () => {
        window.location.reload();
        alert('eliminado correctamente')
      }
    )
    
  }

}
