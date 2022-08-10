import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LeavesRoutingModule } from "./leaves-routing.module";
import { FormComponent as leavesForm } from "./leave-requests/form/form.component";

import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { LeaveRequestsComponent } from "./leave-requests/leave-requests.component";
import { LeavesService } from "./leave-requests/leaves.service";
import { DeleteComponent } from "./leave-requests/delete/delete.component";
import { LeaveBalanceComponent } from "./leave-balance/leave-balance.component";
import { LeaveBalanceService } from "./leave-balance/leave-balance.service";
import { LeaveTypesComponent } from "./leave-types/leave-types.component";
import { LeaveTypesService } from "./leave-types/leave-types.service";
import { ComponentsModule } from "src/app/shared/components/components.module";

@NgModule({
  declarations: [
    leavesForm,
    DeleteComponent,
    LeaveRequestsComponent,
    LeaveBalanceComponent,
    LeaveTypesComponent,
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
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
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatTableExporterModule,
    MatTooltipModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    ComponentsModule,
  ],
  providers: [LeavesService, LeaveBalanceService, LeaveTypesService],
})
export class LeavesModule {}
