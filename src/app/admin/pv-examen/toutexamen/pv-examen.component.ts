import { DataSource, SelectionModel } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, fromEvent, map, merge, Observable } from 'rxjs';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import {etudiant, Ordre, Pvexamen} from './pvexamen';
import { PvexamenService } from './pvexamen.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pv-examen',
  templateUrl: './pv-examen.component.html',
  styleUrls: ['./pv-examen.component.sass']
})
export class PvExamenComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  displayedColumns = [
    "date",
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
  PvPdf:Pvexamen|null;
  Selectedparamettre: Pvexamen | null;
  param:any ;
  pdf:any;
  file:any;
  localQR:string;
  moduleQR:string;
  ordre:Ordre | null;
  ord:any;
  isHidden= false;
  etds:etudiant[];
  //ordre=[];
  fileUploadUrl="http://localhost:8080/examCalender";
  // @ts-ignore

 
  constructor(
    public httpClient: HttpClient,
    public dialog: MatDialog,
    public paramettreService: PvexamenService,
  ) {
    super();
  }
  @ViewChild("test-pdf") invoiceElement!: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild("filter", { static: true }) filter: ElementRef;
  @ViewChild(MatMenuTrigger)

  contextMenu: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };
  ngOnInit(): void {
    this.localQR="";
    this.moduleQR="";
    //this.PvPdf=null;
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

  getOrdreByEtudiantPv(idEtud:number, idPv:number):any{
    return this.httpClient.get<string>("http://localhost:8080/ordre/"+idEtud+"/"+idPv);

  }
  getOrdreByEtudiant(idEtud:number, idPv:number){
    console.log(this.paramettreService.getOrdreByEtudiantPv(idEtud, idPv))
    return this.paramettreService.getOrdreByEtudiantPv(idEtud, idPv);
  }



  openPDF() {
    
        let DATA: any = document.getElementById('test');
        html2canvas(DATA).then((canvas) => {
          let fileWidth = 208;
          let fileHeight = (canvas.height * fileWidth) / canvas.width;
          const FILEURI = canvas.toDataURL('image/png');
          let PDF = new jsPDF('p', 'mm', 'a4');
          let position = 0;
          PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
          let pdfName=this.PvPdf.filiere+' '+this.PvPdf.module+' '+this.PvPdf.local
          PDF.save(pdfName);
        });

        this.isHidden=false;



  }

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

  generate(id:number) {

      this.paramettreService.getParamettre(id).subscribe(async(response) =>{
        this.PvPdf= await response;
        console.log(response);
      });
    console.log("test:" + this.PvPdf?.local);
    this.localQR=this.PvPdf?.local;
    this.moduleQR=this.PvPdf?.module;
    this.isHidden=true;
    
    this.paramettreService.getStudents(id).subscribe(response=>{
      this.etds=response;
    })

    
    


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

