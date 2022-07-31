export class Educacion {
  id!: number;
  nombreEdu: string;
  descripcionEdu: string ;
  iniEduc: string;
  finEduc: string;



  constructor(nombreEdu: string, descripcionEdu: string, iniEduc: string, finEduc: string) {
    this.nombreEdu = nombreEdu;
    this.descripcionEdu = descripcionEdu;
    this.iniEduc = iniEduc;
    this.finEduc = finEduc;

  }


}
