export class Persona {
  
  id_pers? : number;
  nombre : String;
  apellido : String;
  titulo : String;
  foto : String;
  descripcion : String;

  constructor( id: number, nombre:String, apellido:String, titulo:String, foto:String, descripción:String){
    this.id_pers = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.foto = foto;
    this.descripcion = descripción;
  }

}