import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Educacion } from 'src/app/model/educacion';





@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl= environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/all`);
  }
  public addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/add`, educacion);
  }
  public updateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/uptdate`, educacion);
  }
  public deleteEducacion(educacionId: number) :Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${educacionId}`);
  }
}

