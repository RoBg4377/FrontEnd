import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EduacacionService } from 'src/app/servicios/eduacacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {

  educaciones: Educacion[];
  roles: string[];
  isAdmin: boolean = false;  
  educacion: Educacion;

  constructor(
    public educacionService: EduacacionService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): Educacion[] {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.educacionService.educacionList().subscribe((data) => {
      this.educaciones = data;
    });
    return this.educaciones;
  }
  

  borrarEducacion(id_edu: number) {
    this.educacionService.eduBorrar(id_edu).subscribe(
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
