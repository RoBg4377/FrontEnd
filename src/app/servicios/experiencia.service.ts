import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/experiencia/'


  constructor(public http : HttpClient) { }

  public experienciaList(): Observable<Experiencia[]>{
    console.log('get persona observable')

    return this.http.get<Experiencia[]>(this.URL+'traer');

  }
}
