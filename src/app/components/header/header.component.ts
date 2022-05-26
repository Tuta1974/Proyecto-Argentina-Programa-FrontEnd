import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editUsuario: Usuario | undefined;

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.getuser();  }
    public getuser():void {
      this.usuarioService.getuser().subscribe({
        next:(response: Usuario)=>{
          this.usuario=response;
        },
        error:(error:HttpErrorResponse)=>{
          alert(error.message);
        }
      })}

}
