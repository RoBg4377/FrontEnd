import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-acerca-de-mi',
  templateUrl: './acerca-de-mi.component.html',
  styleUrls: ['./acerca-de-mi.component.css']
})
export class AcercaDeMiComponent implements OnInit {

  nombre = '';
  apellido = '';
  titulo = '';
  prese = '';
  foto = '';
  
//  colocaNombre(event : Event){
//   this.nombre = (<HTMLInputElement>event.target).value;
//  }


  grabar(){
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
