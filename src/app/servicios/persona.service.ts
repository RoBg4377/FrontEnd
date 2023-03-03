import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/persona/'
  


  

  constructor(private http: HttpClient) {
    
  }

  

  public getPersona(id : number): Observable<Persona>{
    console.log('get persona observable')

    return this.http.get<Persona>(this.URL+`find/${id}`);
  }

  public crear(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', persona)
  }

  public update(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URL + 'editar', persona)
  }
}
