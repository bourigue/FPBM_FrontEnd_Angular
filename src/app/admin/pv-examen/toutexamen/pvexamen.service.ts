import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Pvexamen } from './pvexamen';

@Injectable({
  providedIn: 'root'
})
export class PvexamenService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "http://localhost:8080/pvs";
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
  getAllparam(){
   
    return this.httpClient.get<Pvexamen[]>(this.API_URL);
  }
  
  getEtudiantPv(cine:any){

    return  this.httpClient.post<Pvexamen[]>("http://localhost:8080/pv/"+cine,{});
   
  }
  getAllparamettre(){
   
    this.subs.sink = this.httpClient.get<Pvexamen[]>(this.API_URL).subscribe(
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
  getParamettre(id:number):any{
    let header = new HttpHeaders();
    header.append("Access-Control-Allow-Origin","http://localhost:4200");
    return this.httpClient.post<Pvexamen>("http://localhost:8080/pvById/"+id,{headers: header});
  }
 
  
}
