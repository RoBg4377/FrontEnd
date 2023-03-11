export class Proyectos {

    id_pro?: number;
    nombre_pro : String;
    descripcion_pro : String;
    fecha_pro : String;
    enlace_pro : String;

    constructor (nombre_pro: String, descripcion_pro: String, fecha_pro: String, enlace_pro: String) {
        this.nombre_pro = nombre_pro;
        this.descripcion_pro = descripcion_pro;
        this.fecha_pro = fecha_pro;
        this.enlace_pro = enlace_pro;
    }
}
