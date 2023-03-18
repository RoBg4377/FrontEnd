import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'https://rbg-backend.onrender.com/experiencia/'


  constructor(public http : HttpClient) { }

  public experienciaList(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.URL+'traer');
  }

  public creaExp(exp: Experiencia): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', exp);
  }

  public traeExp(id_exp: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.URL + `find/${id_exp}`)
  }

  public editaExp(id_exp: number, exp: Experiencia): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id_exp}`, exp);
  }

  public borraExp(id_sk: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id_sk}`)
  }
    
}
