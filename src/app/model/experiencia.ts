export class Experiencia {
  id_exp?: number;
  compania :String;
  puesto : String;
  tarea : String;
  img: String;
  fechaIni : String;
  fechaFin : String;

  public constructor(comp: String, pue: String, tar: String, img: String, ini: String, fin: String){
    this.compania = comp;
    this.puesto = pue;
    this.tarea = tar;
    this.img = img;
    this.fechaIni = ini;
    this.fechaFin = fin;
  }
}
