import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  URL = 'https://rbg-backend.onrender.com/proyectos/';

  constructor(private http: HttpClient) {}

  public proyectosList(): Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.URL + 'traer');
  }

  public creaProyecto(proyecto: Proyectos): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', proyecto);
  }

  public traerProyecto(id_pro: number): Observable<Proyectos>{
    return this.http.get<Proyectos>(this.URL + `find/${id_pro}`);
  }

  public editProyecto(id_pro: number, proyecto: Proyectos): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id_pro}`, proyecto);
  }

  public borrarProyecto(id_pro: number): Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id_pro}`)
  }
}
