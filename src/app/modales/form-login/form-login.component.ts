import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  // form: FormGroup;

  isLogged = false;
  isLogginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password!: string;
  roles: string[] = [];
  errMsj: string;

  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
    ) {}

  //   this.form = this.formBuilder.group(
  //     {
  //       nombreUsuario: ['', [Validators.required, Validators.minLength(5)]],
  //       password : ['', [Validators.required,Validators.minLength(8)]]
  //     }
  //   )
  // }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  // get nombreUsuario(){
  //   return this.form.get('nombreUsuario');
  // }

  // get Password(){
  //   return this.form.get('password');
  // }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      (data) => {
        this.isLogged = true;
        this.isLogginFail = false;

        this.tokenService.setAuthorities(data.authorities);
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);

        this.roles = data.authorities;
        this.router.navigate(['indice']);
        window.location.reload();
        // console.log("inicio correcto")
      },
      (err) => {
        this.isLogged = false;
        console.log(this.isLogged);

        this.isLogginFail = true;
        console.log(this.isLogginFail);
        this.errMsj = err.error;
        console.log(this.errMsj);
      }
    );
  }

}
