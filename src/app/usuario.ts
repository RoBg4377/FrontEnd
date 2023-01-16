export class Usuario {
  private nombreUsu : string = '';
  private apellidoUsu : string = '';
  private tituloUsu : string = '';
  private presentacionUsu : string = '';
  private fotoUsu : string = '';

  
  constructor (nombreUsu: string, apellidoUsu: string, tituloUsu: string, presentacionUsu: string, fotoUsu: string ){
    this.nombreUsu = nombreUsu;
    this.apellidoUsu = apellidoUsu;
    this.tituloUsu = tituloUsu;
    this.presentacionUsu = presentacionUsu;
    this.fotoUsu = fotoUsu
  }

  public getNombreUsu(): string{
    return this.nombreUsu
  }
  public getApellidoUsu(): string{
    return this.apellidoUsu
  }
  public getTituloUsu(): string{
    return this.tituloUsu
  }
  public getPresentacionUsu(): string{
    return this.presentacionUsu
  }
  public getFotoUsu(): string{
    return this.fotoUsu
  }
  public setNomUsu(nombre: string): void {
    this.nombreUsu = nombre;
  }



}
