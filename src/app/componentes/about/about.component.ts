import { Component, OnInit } from '@angular/core';
import { AcercaDeMiComponent } from 'src/app/modales/acerca-de-mi/acerca-de-mi.component';
import { ServicioDatosPorfolioService } from 'src/app/servicios/servicio-datos-porfolio.service';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  portfolioDatos : any;

  constructor(private datosPortfolio : ServicioDatosPorfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.portfolioDatos = data;
    })
  }

}
