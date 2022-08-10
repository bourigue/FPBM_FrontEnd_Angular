import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MyProjects } from "./my-projects.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class MyProjectsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/my-projects.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<MyProjects[]> = new BehaviorSubject<MyProjects[]>(
    []
  );
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): MyProjects[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllMyProjectss(): void {
    this.subs.sink = this.httpClient.get<MyProjects[]>(this.API_URL).subscribe(
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
  addMyProjects(myProjects: MyProjects): void {
    this.dialogData = myProjects;

    /*  this.httpClient.post(this.API_URL, myProjects).subscribe(data => {
      this.dialogData = myProjects;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateMyProjects(myProjects: MyProjects): void {
    this.dialogData = myProjects;

    /* this.httpClient.put(this.API_URL + myProjects.id, myProjects).subscribe(data => {
      this.dialogData = myProjects;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteMyProjects(id: number): void {
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
