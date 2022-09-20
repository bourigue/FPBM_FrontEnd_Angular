export class Pvexamen {
    id: number;
    local: string;
    module: string;
    filiere: string;
    semestre: string;
    date: string;
    heure: string;
    de:number;
    jusqua: number;
    responsableModule: string;
    ordre:string;
    etudiants: etudiant[];


    constructor(id: number, local: string, module: string, filiere: string, semestre: string, date: string, heure: string, de: number, jusqua: number, responsableModule: string, etudiants: etudiant[]) {
        this.id = id;
        this.local = local;
        this.module = module;
        this.filiere = filiere;
        this.semestre = semestre;
        this.date = date;
        this.heure = heure;
        this.de = de;
        this.jusqua = jusqua;
        this.responsableModule = responsableModule;
        this.etudiants = etudiants;
    }
}

export class etudiant{
    id:number;
    nom: string;
    prenom: string;
    appogee: string;
    cne: string;
    cine: string;
    ordre:any;
}
export class Ordre{
    id:number;
    ordre:number;

    constructor(id: number, ordre: number) {
        this.id = id;
        this.ordre = ordre;
    }
}
