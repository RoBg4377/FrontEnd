import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EduacacionService {

  URL = 'http://localhost:8080/educacion/'

  constructor(private http: HttpClient) { }

  public educacionList(): Observable<Educacion[]>{
    console.log('get persona observable')

    return this.http.get<Educacion[]>(this.URL+'traer');

  }
}
