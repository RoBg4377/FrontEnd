import { Component, OnInit } from '@angular/core';
import { SpinerService } from 'src/app/servicios/spiner.service';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.css']
})
export class SpinerComponent implements OnInit {

  isLoading$ = this.spinerService.isLoading$;

  constructor(private spinerService: SpinerService) { }

  ngOnInit(): void {
  }

}
