
export class Professeur {
    id: number;
    nom: string;
    prenom: string;
    dateNaissance: Date;
    grade: string;
    cine: string;
    constructor(professeur) {
        {
          this.nom = professeur.nom || "";
          this.prenom = professeur.prenom || "";
          this.dateNaissance = professeur.dateNaissance;
          this.grade = professeur.grade || "";
          this.cine = professeur.cine || "";
         
        }
      }
}
