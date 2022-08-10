import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { Attendances } from "./attendance.model";
@Injectable()
export class AttendancesService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/attendance.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Attendances[]> = new BehaviorSubject<
    Attendances[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Attendances[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllAttendancess(): void {
    this.subs.sink = this.httpClient.get<Attendances[]>(this.API_URL).subscribe(
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
  addAttendances(attendances: Attendances): void {
    this.dialogData = attendances;

    /*  this.httpClient.post(this.API_URL, attendances).subscribe(data => {
      this.dialogData = attendances;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateAttendances(attendances: Attendances): void {
    this.dialogData = attendances;

    /* this.httpClient.put(this.API_URL + attendances.id, attendances).subscribe(data => {
      this.dialogData = attendances;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteAttendances(id: number): void {
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
