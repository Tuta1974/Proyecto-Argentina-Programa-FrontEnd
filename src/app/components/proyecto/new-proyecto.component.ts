import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectoService } from '../../servicios/proyecto.service';
import { Proyecto } from '../../model/proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombrePro: string = '';
  descripPro: string = '';
  fotoPro: string = '';

  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Proyecto(this.nombrePro, this.descripPro, this.fotoPro);
    this.proyectoService.save(pro).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
