import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario} from '../model/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiSeverUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getuser():Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiSeverUrl}/`);

  }

  public updateUsuario(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.apiSeverUrl}/`,usuario);
  }
}
