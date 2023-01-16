import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioDatosPorfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get('./assets/data/data.json')
  }

  // mandarDatos(): Observable<any>{
  //   return this.http.post('./assets/data/data.json', )
  // }
}
