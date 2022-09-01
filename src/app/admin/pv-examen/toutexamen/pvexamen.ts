export class Pvexamen {
    id: number;
    local: string;
    module: string;
    filiere: string;
    semestre: string;
    date: string;
    heure: string;
    responsableModule: string;
    etudiants: etudiant[];
  
  
    constructor(local: string, module: string, filiere: string, semestre: string,date:string, heure: string, responsableModule: string, etudiants: etudiant[]) {
      this.local = local;
      this.module = module;
      this.filiere = filiere;
      this.semestre = semestre;
      this.date = date;
      this.heure = heure;
      this.responsableModule = responsableModule;
      this.etudiants=etudiants;
    };
}

export class etudiant{
    id:number;
    nom: string;
    prenom: string;
    appogee: string;
    cne: string;
    cine: string;
}
