import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinerService } from './spiner.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  
  constructor(
    private tokenService : TokenService,
    private spinerService : SpinerService
  ) { 
    this.verificar()
    
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinerService.mostrar();
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token != null){
      intReq = req.clone({headers: req.headers.set('Authotization', 'Bearer ' + token)})
    }
    return (next.handle(intReq).pipe(finalize(()=> this.spinerService.ocultar())));
  }

  verificar( ){
    
  }
  
}
export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}];