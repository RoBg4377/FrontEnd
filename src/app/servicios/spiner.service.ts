import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinerService {
  isLoading$ = new Subject<boolean>()
  constructor() { }

  mostrar(){
    this.isLoading$.next(true);
  }
  ocultar(){
    this.isLoading$.next(false);
  }
}
