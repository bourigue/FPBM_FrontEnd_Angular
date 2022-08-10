import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Today } from "./today.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class TodayService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/today.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Today[]> = new BehaviorSubject<Today[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Today[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllTodays(): void {
    this.subs.sink = this.httpClient.get<Today[]>(this.API_URL).subscribe(
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
}
