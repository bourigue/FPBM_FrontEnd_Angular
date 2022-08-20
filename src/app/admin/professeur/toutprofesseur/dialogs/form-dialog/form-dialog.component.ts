import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Professeur } from '../../professeur';
import { ProfesseurService } from '../../professeur.service';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent  {
  action: string;
  dialogTitle: string;
  professeurForm: UntypedFormGroup;
  professeur: Professeur;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public professeurService: ProfesseurService,
    private fb: UntypedFormBuilder
  ) {
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.professeur.nom;
      this.professeur = data.professeur;
    } else {
      this.dialogTitle = "New ";
      this.professeur = new Professeur({});
    }
    this.professeurForm = this.createContactForm();
   }
   formControl = new UntypedFormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      
      nom: [this.professeur.nom],
      prenom: [this.professeur.prenom],
      dateNaissance: [this.professeur.dateNaissance],
      grade: [this.professeur.grade],
      cine: [this.professeur.cine],  
    });
  }
  submit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    if (this.action === "edit") {
    this.professeurService.updateProfesseur(this.professeurForm.getRawValue(),this.professeur.id);
     console.log(this.professeur);
     
  }

  
  else {
    this.professeurService.addProfesseur(this.professeurForm.getRawValue());
  }
}

}