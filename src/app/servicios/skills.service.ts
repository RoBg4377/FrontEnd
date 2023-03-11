import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {

  URL = 'http://localhost:8080/skills/';

  constructor(private http: HttpClient) {}

  public skillsList(): Observable<Skills[]> {
    console.log('get persona observable');
    return this.http.get<Skills[]>(this.URL + 'traer');
  }

  public creaSkills(skill : Skills): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', skill);
  }

  public traeSkills(id_sk: number): Observable<Skills>{
    return this.http.get<Skills>(this.URL + `find/${id_sk}`)
  }

  public editaSkills(id_sk: number, skill: Skills): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id_sk}`, skill);
  }

  public borraSkills(id_sk: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id_sk}`);
  }
}
