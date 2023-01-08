import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  instit: string = 'FreeCodeCamp Academy';
  nomCurso: string = 'Algortimos de JavaScript y Estructura de datos';
  temas: String[] = [
    'JavaScript básico',
    'ES6',
    'Expresiones regulares',
    'Depuración',
    'Estructuras de datos básicas',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
