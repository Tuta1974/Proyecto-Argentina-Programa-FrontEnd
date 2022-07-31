export class Experiencia {
  id!: number;
  nombreE: string;
  descripcionE: string;
  iniExp: string;
  finExp: string;



  constructor(nombreE: string, descripcionE: string, iniExp: string, finExp: string) {
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.iniExp = iniExp;
    this.finExp = finExp;

  }

}
