import { EtudiantService } from './../../etudiant.service';

import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Etudiant } from '../../etudiant';


@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.sass']
})
export class FormDialogComponent {

  action: string;
  dialogTitle: string;
  holidayForm: UntypedFormGroup;
  holiday: Etudiant;
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public holidayService: EtudiantService,
    private fb: UntypedFormBuilder
  ) {
    // Set the defaults
    this.action = data.action;
    if (this.action === "edit") {
      this.dialogTitle = data.holiday.nom;
      this.holiday = data.holiday;
    } else {
      this.dialogTitle = "New Etudiant";
      this.holiday = new Etudiant({});
    }
    this.holidayForm = this.createContactForm();
  }
  formControl = new UntypedFormControl("", [
    Validators.required,
    // Validators.email,
  ]);
  getErrorMessage() {
    return this.formControl.hasError("required")
      ? "Required field"
      : this.formControl.hasError("email")
      ? "Not a valid email"
      : "";
  }
  createContactForm(): UntypedFormGroup {
    return this.fb.group({
      id: [this.holiday.id],
      nom: [this.holiday.nom],
      prenom: [this.holiday.prenom],
      dateNaissance: [this.holiday.dateNaissance],
      cne: [this.holiday.cne],
      cine: [this.holiday.cine],
      appogee: [this.holiday.appogee],
      
    });
  }
  submit() {
    // emppty stuff
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  public confirmAdd(): void {
    this.holidayService.addHoliday(this.holidayForm.getRawValue());
  }}


