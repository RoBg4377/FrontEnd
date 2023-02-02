import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  URL = 'http://localhost:8080/skills/'

  constructor(private http : HttpClient) { }

  public skillsList(): Observable<Skills[]>{
    console.log('get persona observable')

    return this.http.get<Skills[]>(this.URL+'traer');

  }


}
