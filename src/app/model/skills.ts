export class Skill {
  id!: number;
  skillNombre: string;
  fotoSkill: string;
  porcentajeSkill: number;

  constructor(skillNombre: string, fotoSkill: string, porcentajeSkill: number) {
    this.skillNombre = skillNombre;
    this.fotoSkill = fotoSkill;
    this.porcentajeSkill = porcentajeSkill;
  }
}
