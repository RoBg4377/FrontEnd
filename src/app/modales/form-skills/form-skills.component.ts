import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-form-skills',
  templateUrl: './form-skills.component.html',
  styleUrls: ['./form-skills.component.css']
})
export class FormSkillsComponent implements OnInit {

  id_sk? : number;
  nom_skill : String;
  porcentaje : number;
  logo_skills : String;

  constructor(
    private skillsService: SkillsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  creaSkills(){
    const skill = new Skills(this.nom_skill, this.porcentaje, this.logo_skills)
    this.skillsService.creaSkills(skill).subscribe(
      data => {
        alert('nueva habilidad añadida');
        this.router.navigate(['skills']);
        
      }
    )
    window.location.reload(); 
  }

}
