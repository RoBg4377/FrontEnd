export class Experiencia {
  id_exp?: number;
  compania :String;
  puesto : String;
  tarea : String;
  img: String;
  fechaIni : number;
  fechaFin : number;

  public constructor(comp: String, pue: String, tar: String, img: String, ini: number, fin: number){
    this.compania = comp;
    this.puesto = pue;
    this.tarea = tar;
    this.img = img;
    this.fechaIni = ini;
    this.fechaFin = fin;
  }
}
