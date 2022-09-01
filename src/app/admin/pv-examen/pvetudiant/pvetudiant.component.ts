import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  onSubmit() {
   
    console.log("Form Value", this.docForm.value);
  }
}
