import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EduacacionService {
  URL = 'https://rbg-backend.onrender.com/educacion/';

  constructor(private http: HttpClient) {}

  public educacionList(): Observable<Educacion[]> {
    return this.http.get<Educacion[]>(this.URL + 'traer');
  }

  public eduCrear(educacion : Educacion): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', educacion);
  }

  public eduEditar(id_edu: number, educacion : Educacion): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id_edu}`, educacion);
  }
  
  public eduBorrar(id_edu: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id_edu}`);
  }

  public eduTraer(id_edu: number): Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `find/${id_edu}`)
  }
}
