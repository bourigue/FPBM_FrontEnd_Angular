import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { MyTasks } from "./my-tasks.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class MyTasksService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/my-tasks.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<MyTasks[]> = new BehaviorSubject<MyTasks[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): MyTasks[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllMyTaskss(): void {
    this.subs.sink = this.httpClient.get<MyTasks[]>(this.API_URL).subscribe(
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
  addMyTasks(myTasks: MyTasks): void {
    this.dialogData = myTasks;

    /*  this.httpClient.post(this.API_URL, myTasks).subscribe(data => {
      this.dialogData = myTasks;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateMyTasks(myTasks: MyTasks): void {
    this.dialogData = myTasks;

    /* this.httpClient.put(this.API_URL + myTasks.id, myTasks).subscribe(data => {
      this.dialogData = myTasks;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteMyTasks(id: number): void {
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
