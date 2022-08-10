import { formatDate } from "@angular/common";
export class Etudiant {
    id:number;
    nom:string;
    prenom:string;
    dateNaissance:string;
    appogee:string;
    cne:string;
    cin:string;


    constructor(Etudiant) {
        
          this.id = null;
          this.nom = Etudiant.nom || "";
          this.prenom = Etudiant.prenom || "";
          this.appogee = Etudiant.appogee || "";
          this.cne = Etudiant.cne || "";
          this.cin = Etudiant.cne || "";
          this.dateNaissance = formatDate(new Date(), "yyyy-MM-dd", "en") || "";
         // this.location = Etudiant.location || "";
        
      }

}
