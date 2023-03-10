import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EduacacionService } from 'src/app/servicios/eduacacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css'],
})
export class EditarEducacionComponent implements OnInit {
  educacion: Educacion;

  constructor(
    private educacionService: EduacacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);
    this.educacionService.eduTraer(id).subscribe(
      (data) => {
        this.educacion = data;
      },
      (err) => {
        this.router.navigate(['educacion']);
      }
    );
    console.log(this.educacion);
  }

  editarEducacion(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacionService.eduEditar(id, this.educacion).subscribe(
      (data) => {
        this.router.navigate(['educacion']);
        alert('Educación actualizada');
      },
      (err) => {
        this.router.navigate(['educacion']);
        alert('Educación actualizada');
      }
    );
  }
}
