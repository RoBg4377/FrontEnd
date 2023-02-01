import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EduacacionService } from 'src/app/servicios/eduacacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educaciones : Educacion[];

  constructor(public educacionService : EduacacionService) { }

  ngOnInit(): Educacion[]{
    this.educacionService.educacionList().subscribe(data => {this.educaciones = data})
    return this.educaciones
  }

  

}
