import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  mail: boolean = false;
  whatsapp : boolean = false;

  mostrarMail(){
    this.mail = !this.mail;
  }
  mostrarWhats(){
    this.whatsapp = !this.whatsapp;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
