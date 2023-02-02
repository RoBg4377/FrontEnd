import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  URL = 'http://localhost:8080/proyectos/'

  constructor(private http : HttpClient) { }

  public proyectosList(): Observable<Proyectos[]>{
    console.log('get persona observable')

    return this.http.get<Proyectos[]>(this.URL+'traer');

  }
}
