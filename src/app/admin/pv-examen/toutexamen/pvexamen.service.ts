import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Pvexamen } from './pvexamen';

@Injectable({
  providedIn: 'root'
})
export class PvexamenService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "http://localhost:8080/b2Paies";
  isTblLoading = true;
  dataChange: BehaviorSubject<Pvexamen[]>=new BehaviorSubject<Pvexamen[]>(
    []
  );
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Pvexamen[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
 
  
  /** CRUD METHODS */
  getAllparam(username){
   
    return this.httpClient.get<Pvexamen[]>(this.API_URL+"/bulletin/"+username);
  }
  getAllparamettre(){
   
    this.subs.sink = this.httpClient.get<Pvexamen[]>(this.API_URL+"/bulletin/").subscribe(
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
 
  
}
