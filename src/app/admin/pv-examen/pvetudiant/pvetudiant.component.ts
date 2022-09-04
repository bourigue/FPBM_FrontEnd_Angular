import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Pvexamen } from '../toutexamen/pvexamen';
import { PvexamenService } from '../toutexamen/pvexamen.service';

@Component({
  selector: 'app-pvetudiant',
  templateUrl: './pvetudiant.component.html',
  styleUrls: ['./pvetudiant.component.sass']
})

export class PvetudiantComponent {
  docForm: UntypedFormGroup;
  hide3 = true;
  agree3 = false;
  param:any;
  cin:any;
  
  constructor(private fb: UntypedFormBuilder,public paramettreService: PvexamenService) {
    this.docForm = this.fb.group({
      cine: ["", [Validators.required]],
    });
  }
  getetudiantPv(){
    console.log(this.docForm.value.cine);
    this.cin=this.docForm.value.cine;
    this.paramettreService.getEtudiantPv(this.cin).subscribe(data=>{
      this.param=data;
      console.log(data);
   
    });
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('test');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, 5, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
  onSubmit() {
   
    console.log("Form Value", this.docForm.value);
  }
}


