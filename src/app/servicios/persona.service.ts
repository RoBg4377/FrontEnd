import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) {}

  public traerPersona(id_pers: number): Observable<Persona> {
    return this.http.get<Persona>(this.URL + `find/${id_pers}`);
  }

  public crearPersona(persona: Persona): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', persona);
  }

  public editarPersona(id_pers: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL +`editar/${id_pers}`, persona)
  }
}
