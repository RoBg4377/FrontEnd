export class Persona {
  
  id? : number;
  nombre : String;
  apellido : String;
  titulo : String;
  foto : String;
  descripcion : String;

  constructor( nombre:String, apellido:String, titulo:String, foto:String, descripción:String){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.foto = foto;
    this.descripcion = descripción;
  }

}