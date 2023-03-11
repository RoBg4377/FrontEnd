import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { EduacacionService } from 'src/app/servicios/eduacacion.service';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

  skill: Skills;

  constructor(
    private skillsService: SkillsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.skillsService.traeSkills(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        this.router.navigate(['skills']);
      }
    );
  }

  editarEducacion(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsService.editaSkills(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['skills']);
        alert('Educación actualizada');
      },
      (err) => {
        this.router.navigate(['skills']);
        alert('Educación actualizada');
      }
    );
  }

}
