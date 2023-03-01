import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-about',
  templateUrl: './form-about.component.html',
  styleUrls: ['./form-about.component.css']
})
export class FormAboutComponent implements OnInit {

  nombre = '';
  apellido = '';
  titulo = '';
  prese = '';
  foto = '';

  //  colocaNombre(event : Event){
  //   this.nombre = (<HTMLInputElement>event.target).value;
  //  }

  grabar() {}

  constructor() {}

  ngOnInit(): void {}

}
