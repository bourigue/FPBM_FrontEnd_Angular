import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { MyProjectsService } from "./my-projects.service";
import { HttpClient } from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MyProjects } from "./my-projects.model";
import { DataSource } from "@angular/cdk/collections";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, fromEvent, merge, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { MatMenuTrigger } from "@angular/material/menu";
import { SelectionModel } from "@angular/cdk/collections";
import { FormComponent } from "./form/form.component";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";

@Component({
  selector: "app-my-projects",
  templateUrl: "./my-projects.component.html",
  styleUrls: ["./my-projects.component.sass"],
})
export class MyProjectsComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  filterToggle = false;
  displayedColumns = [
    "id",
    "title",
    "clientName",
    "startDate",
    "endDate",
    "deadLine",
    "noOfMembers",
    "priority",
    "progress",
    "status",
  ];
  exampleDatabase: MyProjectsService | null;
  dataSource: ExampleDataSource | null;
  selection = new SelectionModel<MyProjects>(true, []);
  id: number;
  myProjects: MyProjects | null;
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public myProjectsService: MyProjectsService,
    private snackBar: MatSnackBar
  ) {
    super();
  }
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filter", { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };

  ngOnInit() {
    this.loadData();
  }
  detailsCall(row) {
    this.dialog.open(FormComponent, {
      data: {
        myProjects: row,
        action: "details",
      },
      height: "70%",
      width: "35%",
    });
  }
  toggleStar(row) {
    console.log(row);
  }

  public loadData() {
    this.exampleDatabase = new MyProjectsService(this.httpClient);
    this.dataSource = new ExampleDataSource(
      this.exampleDatabase,
      this.paginator,
      this.sort
    );
    this.subs.sink = fromEvent(this.filter.nativeElement, "keyup").subscribe(
      () => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      }
    );
  }
}
export class ExampleDataSource extends DataSource<MyProjects> {
  filterChange = new BehaviorSubject("");
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: MyProjects[] = [];
  renderedData: MyProjects[] = [];
  constructor(
    public exampleDatabase: MyProjectsService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<MyProjects[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllMyProjectss();
    return merge(...displayDataChanges).pipe(
      map(() => {
        // Filter data
        this.filteredData = this.exampleDatabase.data
          .slice()
          .filter((myProjects: MyProjects) => {
            const searchStr = (
              myProjects.name +
              myProjects.leaveTo +
              myProjects.type +
              myProjects.from +
              myProjects.status +
              myProjects.reason
            ).toLowerCase();
            return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
          });
        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());
        // Grab the page's slice of the filtered sorted data.
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        this.renderedData = sortedData.splice(
          startIndex,
          this.paginator.pageSize
        );
        return this.renderedData;
      })
    );
  }
  disconnect() {}
  /** Returns a sorted copy of the database data. */
  sortData(data: MyProjects[]): MyProjects[] {
    if (!this._sort.active || this._sort.direction === "") {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number | string = "";
      let propertyB: number | string = "";
      switch (this._sort.active) {
        case "id":
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case "name":
          [propertyA, propertyB] = [a.name, b.name];
          break;
        case "type":
          [propertyA, propertyB] = [a.type, b.type];
          break;
        case "leaveTo":
          [propertyA, propertyB] = [a.leaveTo, b.leaveTo];
          break;
        case "status":
          [propertyA, propertyB] = [a.status, b.status];
          break;
        case "reason":
          [propertyA, propertyB] = [a.reason, b.reason];
          break;
      }
      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
      return (
        (valueA < valueB ? -1 : 1) * (this._sort.direction === "asc" ? 1 : -1)
      );
    });
  }
}
