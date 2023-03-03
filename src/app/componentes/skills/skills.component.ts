import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  isAdmin: boolean = false;
  roles: string[];

  habilidades : Skills[];
  barra : 58;


  constructor(private skillService : SkillsService, private tokenService : TokenService) { }

  

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

}
