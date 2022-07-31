import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillsService } from '../../servicios/skills.service';
import { Skill } from '../../model/skills';

@Component({
  selector: 'app-new-hardysoft',
  templateUrl: './new-hardysoft.component.html',
  styleUrls: ['./new-hardysoft.component.css']
})
export class NewHardysoftComponent implements OnInit {
  skillNombre: string = '';
  fotoSkill: string = '';
  porcentajeSkill: number = 0;


  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skills = new Skill(this.skillNombre, this.fotoSkill,this.porcentajeSkill);
    this.skillsService.save(skills).subscribe(
      data => {
        alert("Skill añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )

}
}
