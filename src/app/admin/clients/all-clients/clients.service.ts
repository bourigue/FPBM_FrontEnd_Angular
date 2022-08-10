import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Clients } from "./clients.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class ClientsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/clients.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Clients[]> = new BehaviorSubject<Clients[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Clients[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllClients(): void {
    this.subs.sink = this.httpClient.get<Clients[]>(this.API_URL).subscribe(
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
  addClient(clients: Clients): void {
    this.dialogData = clients;

    /*  this.httpClient.post(this.API_URL, client).subscribe(data => {
      this.dialogData = client;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateClient(clients: Clients): void {
    this.dialogData = clients;

    /* this.httpClient.put(this.API_URL + client.id, client).subscribe(data => {
      this.dialogData = client;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteClient(id: number): void {
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
