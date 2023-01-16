import { Component, OnInit } from '@angular/core';
import { ServicioDatosPorfolioService } from 'src/app/servicios/servicio-datos-porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionDatos: any;

  constructor(private datosPortfolio : ServicioDatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.educacionDatos = data.educacion;
    })
  }

}
