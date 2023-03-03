import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  logeado: boolean = true;
  proyectos : Proyectos[];
  roles: string[];
  isAdmin: boolean = false;


  constructor(public proyectoService : ProyectosService, private tokenService: TokenService) { }

  ngOnInit(): Proyectos[] {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    
    this.proyectoService.proyectosList().subscribe(data => {this.proyectos = data})
    return this.proyectos;
  }

  

}
