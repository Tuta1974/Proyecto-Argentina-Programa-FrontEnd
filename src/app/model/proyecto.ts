export class Proyecto {
  id!: number;
  nombrePro: string;
  descripPro: string;
  fotoPro: string;

  constructor(nombrePro: string, descripPro: string, fotoPro: string) {

    this.nombrePro = nombrePro;
    this.descripPro = descripPro;
    this.fotoPro = fotoPro;
  }
}


