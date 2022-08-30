import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, fromEvent, map, merge, Observable } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { Pvexamen } from './pvexamen';
import { PvexamenService } from './pvexamen.service';

@Component({
  selector: 'app-pv-examen',
  templateUrl: './pv-examen.component.html',
  styleUrls: ['./pv-examen.component.sass']
})
export class PvExamenComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  displayedColumns = [
    "local",
    "module",
    "filiere",
    "semestre",
    "heure",
    "responsableModule",
    "pdf",
  ];
  exampleDatabase: PvexamenService|null;
  dataSource: ExampleDataSource | null;
  selection = new SelectionModel<Pvexamen>(true, []);
  index: number;
  id: number;
  paramettre: Pvexamen | null;
  param:any ;
  pdf:any;
  file:any;
  fileUploadUrl="http://localhost:8080/professeur/importToDb"
 
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public paramettreService: PvexamenService,
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
  refresh() {
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
 /*
  public generatePDF(pdf) {
    
      const fileWidth = 200;
     
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(pdf, 'PNG', 0, 5, fileWidth, 320,);
    
      PDF.save('fichePaie.pdf');
    
  }*/
  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
  }
  public loadData() {
    this.exampleDatabase = new PvexamenService(this.httpClient);
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
  onContextMenu(event: MouseEvent, item: Pvexamen) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menuData = { item: item };
    this.contextMenu.menu.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }

}
export class ExampleDataSource extends DataSource<Pvexamen> {
  id:any;
  filterChange = new BehaviorSubject("");
  get filter(): string {
    return this.filterChange.value;
  }
  set filter(filter: string) {
    this.filterChange.next(filter);
  }
  filteredData: Pvexamen[] = [];
  renderedData: Pvexamen[] = [];
  constructor(
    public exampleDatabase: PvexamenService,
    public paginator: MatPaginator,
    public _sort: MatSort
  ) {
    super();
    // Reset to the first page when the user changes the filter.
    this.filterChange.subscribe(() => (this.paginator.pageIndex = 0));
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Pvexamen[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this.exampleDatabase.dataChange,
      this._sort.sortChange,
      this.filterChange,
      this.paginator.page,
    ];
    
    
    this.exampleDatabase.getAllparamettre();
    
    return merge(...displayDataChanges).pipe(
      map(()=>{
        this.filteredData = this.exampleDatabase.data
        
        .slice()
        .filter((paramettre: Pvexamen)=> {
          const searchStr = (
            paramettre.filiere
           
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
  sortData(data: Pvexamen[]): Pvexamen[] {
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
          case "local":
          [propertyA, propertyB] = [a.local, b.local];
          break;
        case "module":
          [propertyA, propertyB] = [a.module, b.module];
          break;
        case "filiere":
          [propertyA, propertyB] = [a.filiere, b.filiere];
          break;
        case "semestre":
          [propertyA, propertyB] = [a.semestre, b.semestre];
          break;
        case "heure":
          [propertyA, propertyB] = [a.heure, b.heure];
          break;
        case "responsableModule":
          [propertyA, propertyB] = [a.responsableModule, b.responsableModule];
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
