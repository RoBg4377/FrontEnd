import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css']
})
export class EditarProyectosComponent implements OnInit {

  proyecto: Proyectos;

  constructor(
    private proyectosService: ProyectosService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    console.log(id)

    this.proyectosService.traerProyecto(id).subscribe(
      (data)=>{
        this.proyecto = data;
      }      
    )
  }

  editarProyecto(): void{
    const id = this.activateRouter.snapshot.params['id'];
    this.proyectosService.editProyecto(id, this.proyecto).subscribe(
      ()=> {
        alert('actualizado')
      }
    )
    alert('actualizado correctamente')
    this.router.navigate(['proyectos'])
  }

}
