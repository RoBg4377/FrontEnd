import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  nombre: string;
  nombreUsuario: string;
  email: string;
  password: string;

  nuevoUsuario: NuevoUsuario;
  isRegister = false;
  isRegisterFail = true;
  isLogged = false;
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      (data) => {
        this.isRegister = true;
        this.isRegisterFail = false;
        alert('Cuenta creada exitosamente')
        this.router.navigate(['/indice']);
        window.location.reload();
        
        
      },
      (err) => {
        this.isRegister = false;
        this.isRegisterFail = true;
        this.errMsj = err.error.Mensaje;
      }
    );
  }

}
