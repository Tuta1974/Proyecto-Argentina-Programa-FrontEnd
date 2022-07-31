import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-edit-hardysoft',
  templateUrl: './edit-hardysoft.component.html',
  styleUrls: ['./edit-hardysoft.component.css']
})
export class EditHardysoftComponent implements OnInit {
  skills: Skill = null;

  constructor(private skillsService: SkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.detail(id).subscribe(
      data =>{
        this.skills = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.update(id, this.skills).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar skill");
         this.router.navigate(['']);
      }
    )
  }

}
