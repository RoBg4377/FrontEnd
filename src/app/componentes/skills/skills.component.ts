import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades : Skills[];
  roles: string[];
  isAdmin: boolean = false;  
  barra : 58;


  constructor(
    private skillService : SkillsService, 
    private tokenService : TokenService,
    private reouter: Router
    ) { }

  ngOnInit(): Skills[] {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
    this.skillService.skillsList().subscribe(data => {this.habilidades = data})
    return this.habilidades;
  }

  borraSkills(id_sk: number){
    this.skillService.borraSkills(id_sk).subscribe(
      () => {
        alert('eliminado correctamente')
      }
    )
    window.location.reload();
  }

}
