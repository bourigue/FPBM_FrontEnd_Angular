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
    surveillants:surveillant[];


    constructor(id: number, local: string, module: string, filiere: string, semestre: string, date: string, heure: string,
         de: number, jusqua: number, responsableModule: string, etudiants: etudiant[], surveillants:surveillant[]) {
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
        this.surveillants=surveillants;
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
export class surveillant{
    id:number;
    nom:string;
    prenom:string;
    disponible:boolean;
    constructor(id:number,nom:string ,prenom:string,disponible:boolean) {
        this.id=id;
        this.nom=nom
        this.prenom = prenom;
        this.disponible=disponible;
    }
}
