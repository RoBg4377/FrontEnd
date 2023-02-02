import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidades : Skills[]; 

  barra : 58;


  constructor(private skillService : SkillsService) { }

  

  ngOnInit(): Skills[] {

    this.skillService.skillsList().subscribe(data => {this.habilidades = data})

    return this.habilidades;

  }

}
