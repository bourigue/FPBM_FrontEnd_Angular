
import { Injectable } from '@angular/core';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Etudiant } from './etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService extends UnsubscribeOnDestroyAdapter {

  private readonly API_URL = "http://localhost:8080/etudiants";
  isTblLoading = true;
  dataChange: BehaviorSubject<Etudiant[]> = new BehaviorSubject<Etudiant[]>(
    []
  );
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Etudiant[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllHolidays(): void {
    this.subs.sink = this.httpClient.get<Etudiant[]>(this.API_URL).subscribe(
      (data) => {
        this.isTblLoading = false;
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + " " + error.message);
      }
    );
  }
  addHoliday(holiday: Etudiant): void {
    this.dialogData = holiday;

    /*  this.httpClient.post(this.API_URL, holiday).subscribe(data => {
      this.dialogData = holiday;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateHoliday(holiday: Etudiant): void {
    this.dialogData = holiday;

    /* this.httpClient.put(this.API_URL + holiday.id, holiday).subscribe(data => {
      this.dialogData = holiday;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteHoliday(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
