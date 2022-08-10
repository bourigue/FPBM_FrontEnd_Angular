import { Component, OnInit } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
@Component({
  selector: "app-attendance-sheet",
  templateUrl: "./attendance-sheet.component.html",
  styleUrls: ["./attendance-sheet.component.sass"],
})
export class AttendanceSheetComponent implements OnInit {
  attendanceForm: UntypedFormGroup;
  constructor() {
    this.attendanceForm = new UntypedFormGroup({
      fromDate: new UntypedFormControl(),
      toDate: new UntypedFormControl(),
    });
  }
  ngOnInit(): void {}
}
