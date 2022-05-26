import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educacion:Educacion[]=[];
  public editEducacion: Educacion | undefined;
  public deleteEducacion: Educacion | undefined;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }
  public getEducacion():void{
    this.educacionService.getEducacion().subscribe({
      next: (Response: Educacion[]) =>{
        this.educacion=Response;
      },
        error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
  })

  }
  public onOpenModal(mode:String,educacion?: Educacion):void{
   const container=document.getElementById('main-container');
   const button=document.createElement('button');
   button.style.display="none";
   button.setAttribute('data-toggle', 'modal');
   if(mode=='add'){
     button.setAttribute('data-target', '#addEducacionModal');
   }else if(mode==='delete'){
     this.deleteEducacion=educacion;
     button.setAttribute('data-target', '#deleteEducacionModal');
   }else if(mode==='edit'){
     this.editEducacion=educacion;
     button.setAttribute('data-target', '#editEducacionModal');
   }
   container?.appendChild(button);
   button.click();
  }
  public onAddEducacion(addForm: NgForm){
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next: (response:Educacion) =>{
        console.log(response);
        this.getEducacion();
        addForm.resetForm();
      },
      error: (error:HttpErrorResponse)=> {
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateEducacion(educacion: Educacion){
    this.editEducacion=educacion;
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.updateEducacion(educacion).subscribe({
      next: (response:Educacion) =>{
        console.log(response);
        this.getEducacion();

      },
      error: (error:HttpErrorResponse) =>{
        alert(error.message);

    }
  })

}
public onDeleteEducacion(idEdu: number):void{
   this.educacionService.deleteEducacion(idEdu).subscribe({
    next: (response:void) =>{
      console.log(response);
      this.getEducacion();

    },
    error: (error:HttpErrorResponse) =>{
      alert(error.message);

  }
})

}
}
