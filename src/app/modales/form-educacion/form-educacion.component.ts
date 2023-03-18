import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EduacacionService } from 'src/app/servicios/eduacacion.service';

@Component({
  selector: 'app-form-educacion',
  templateUrl: './form-educacion.component.html',
  styleUrls: ['./form-educacion.component.css']
})
export class FormEducacionComponent implements OnInit {

  id_edu? : number;
  academia : String = '';
  curso : String = '';
  temas : String = '';
  fecha : number;
  enlace : String = '';

  constructor(
    private educacionService : EduacacionService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  crearEducacion(){
    const educacion = new Educacion (this.academia, this.curso, this.temas, this.fecha, this.enlace);
    this.educacionService.eduCrear(educacion).subscribe(
      data => {
        alert('Educación creada correctamente');
        this.router.navigate(['educacion']);
        window.location.reload(); 
      },
      err => {
        window.location.reload();
        this.router.navigate(['educacion'])
      }
    )
  }
  

}
