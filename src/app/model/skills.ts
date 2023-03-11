export class Skills {

  id_sk?: number;
  nom_skill : String;
  porcentaje : number;
  logo_skills : String;

  public constructor (nom: String, porecent: number, logo: String){
    this.nom_skill = nom;
    this.porcentaje = porecent;
    this.logo_skills = logo;
  }

}
