import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HolidayRoutingModule } from "./holidays-routing.module";
import { AllHolidayComponent } from "./all-holidays/all-holidays.component";
import { DeleteDialogComponent } from "./all-holidays/dialog/delete/delete.component";
import { FormDialogComponent } from "./all-holidays/dialog/form-dialog/form-dialog.component";
import { EditHolidayComponent } from "./edit-holiday/edit-holiday.component";
import { AddHolidayComponent } from "./add-holiday/add-holiday.component";
import { HolidayService } from "./all-holidays/all-holidays.service";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    AllHolidayComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    EditHolidayComponent,
    AddHolidayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableExporterModule,
    MatTooltipModule,
    MatDatepickerModule,
    HolidayRoutingModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [HolidayService],
})
export class HolidayModule {}
