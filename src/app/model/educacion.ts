export class Educacion {

  public id_edu? : number;
  public academia : String;
  public curso : String;
  public temas : String;
  public fecha : String;
  public enlace : String;

  public constructor (academia: String, curso: String, temas: String, fecha: String, enlace: String) {
    
    this.academia = academia;
    this.curso = curso;
    this.temas = temas;
    this.fecha = fecha;
    this.enlace = enlace;
}


}
