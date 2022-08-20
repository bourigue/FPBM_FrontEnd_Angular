import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Professeur } from './professeur';

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService extends UnsubscribeOnDestroyAdapter{
  private readonly API_URL = "http://localhost:8080/professeur/";
  isTblLoading = true;
  dataChange: BehaviorSubject<Professeur[]>=new BehaviorSubject<Professeur[]>(
    []
  );
  id:any;
  dialogData: any;
  
  constructor(private httpClient: HttpClient) {
   super(); 
  }
  get data(): Professeur[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  getAllProfesseur(): void {
    this.subs.sink = this.httpClient.get<Professeur[]>(this.API_URL+"allprofesseur").subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
        console.log(data);
        
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }
  updateProfesseur(professeur: Professeur,id:any): void {
    this.dialogData = professeur;
     this.httpClient.put(this.API_URL +id, professeur).subscribe(data => {
      this.dialogData = professeur;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );
  }
  deleteProfesseur(id: number): void {
    console.log(id);

     this.httpClient.delete(this.API_URL +"deleteProfesseur/"+ id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );
  }
  addProfesseur(professeur: Professeur): void {
    
    this.dialogData = professeur;
    console.log(this.dialogData);
    

      this.httpClient.post(this.API_URL+"saveProfesseur", professeur).subscribe(data => {

      this.dialogData = professeur;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });
  }
}
