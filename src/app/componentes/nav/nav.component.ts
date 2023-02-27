import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLogged: boolean = false;


  constructor(
    private tokenService: TokenService, 
    private router: Router) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onlogOut(){
    this.tokenService.logOut();    
    this.router.navigate(["/indice"])
    window.location.reload();
    
    


    
  }

}
