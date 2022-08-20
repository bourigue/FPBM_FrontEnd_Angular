import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, fromEvent, map, merge, Observable } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { Professeur } from './professeur';
import { ProfesseurService } from './professeur.service';

@Component({
  selector: 'app-toutprofesseur',
  templateUrl: './toutprofesseur.component.html',
  styleUrls: ['./toutprofesseur.component.sass']
})
export class ToutprofesseurComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  displayedColumns = [
    "select",
    "nom",
    "prenom",
    "dateNaissance",
    "cine",
    "grade",
    "actions",
  ];
  exampleDatabase: ProfesseurService|null;
  dataSource: ExampleDataSource | null;
  selection = new SelectionModel<Professeur>(true, []);
  index: number;
  id: number;
  file:any;
  professeur: Professeur | null;
  fileUploadUrl="http://localhost:8080/professeur/importToDb"
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public professeurService: ProfesseurService,
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
  ngOnInit(): void {
    this.loadData();
  }
  selectFile(event){
    this.file=event.target.files[0];
    console.log(this.file);
    
  }
  uploadFile(){
    let formData=new FormData()
    formData.append("file",this.file)
    this.httpClient.post(this.fileUploadUrl,formData).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  refresh() {
    this.loadData();
  }
  addNew() {
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
        professeur: this.professeur,
        action: "add",
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataServicex
        this.exampleDatabase.dataChange.value.unshift(
          this.professeurService.getDialogData()
        );
        this.refreshTable();
        this.showNotification(
          "snackbar-success",
          "Add Record Successfully...!!!",
          "bottom",
          "center"
        );
      }
    });
  }
  editCall(row) {
    this.id = row.id;
    let tempDirection;
    if (localStorage.getItem("isRtl") === "true") {
      tempDirection = "rtl";
    } else {
      tempDirection = "ltr";
    }
    const dialogRef = this.dialog.open(FormDialogComponent, {
      data: {
      professeur: row,
        action: "edit",
      },
      direction: tempDirection,
    });
    this.subs.sink = dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(
          (x) => x.id === this.id
        );
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] =
          this.professeurService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
        this.showNotification(
          "black",
          "Edit Record Successfully...!!!",
          "bottom",
          "center"
        );
      }
    });
  }
  
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.renderedData.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.renderedData.forEach((row) =>
          this.selection.select(row)
        );
  }
  removeSelectedRows() {
    const totalSelect = this.selection.selected.length;
    this.selection.selected.forEach((item) => {
      const index: number = this.dataSource.renderedData.findIndex(
        (d) => d === item
      );
      // console.log(this.dataSource.renderedData.findIndex((d) => d === item));
      this.exampleDatabase.dataChange.value.splice(index, 1);

      this.refreshTable();
      this.selection = new SelectionModel<Professeur>(true, []);
    });
    this.showNotification(
      "snackbar-danger",
      totalSelect + " Record Delete Successfully...!!!",
      "bottom",
      "center"
    );
  }
  public loadData() {
    this.exampleDatabase = new ProfesseurService(this.httpClient);
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
  showNotification(colorPrimeDanciennete, text, placementFrom, placementAlign) {
    this.snackBar.open(text, "", {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorPrimeDanciennete,
    });
  }
  onContextMenu(event: MouseEvent, item: Professeur) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }

}
export class ExampleDataSource extends DataSource<Professeur> {
  filterChange = new BehaviorSubject("");
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: Professeur[] = [];
  renderedData: Professeur[] = [];
  constructor(
    public exampleDatabase: ProfesseurService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Professeur[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    this.exampleDatabase.getAllProfesseur();
    return merge(...displayDataChanges).pipe(
      map(()=>{
        this.filteredData = this.exampleDatabase.data
        .slice()
        .filter((professeur: Professeur)=> {
          const searchStr = (
            professeur.nom
           
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
disconnect(){ }
    /** Returns a sorted copy of the database data. */
  sortData(data: Professeur[]): Professeur[] {
    if (!this._sort.active || this._sort.direction === "") {
      return data;
    }
    return data.sort((a, b) => {
      let propertyA: number |Date| string = "";
      let propertyB: number |Date| string = "";
      switch (this._sort.active) {
        case "id":
          [propertyA, propertyB] = [a.id, b.id];
          break;
          case "nom":
          [propertyA, propertyB] = [a.nom, b.nom];
          break;
        case "prenom":
          [propertyA, propertyB] = [a.prenom, b.prenom];
          break;
        case "cine":
          [propertyA, propertyB] = [a.cine, b.cine];
          break;
        case "grade":
          [propertyA, propertyB] = [a.grade, b.grade];
          break;
        case "dateNaissance":
          [propertyA, propertyB] = [a.dateNaissance, b.dateNaissance];
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
