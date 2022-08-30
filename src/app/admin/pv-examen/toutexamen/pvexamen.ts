export class Pvexamen {
    id: number;
    local: string;
    module: string;
    filiere: string;
    semestre: string;
    heure: string;
    responsableModule: string;
    etudiants: string;
  
  
    constructor(local: string, module: string, filiere: string, semestre: string, heure: string, responsableModule: string, etudiants: string) {
      this.local = local;
      this.module = module;
      this.filiere = filiere;
      this.semestre = semestre;
      this.heure = heure;
      this.responsableModule = responsableModule;
      this.etudiants=etudiants;
    };
}
