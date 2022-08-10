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
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { SupportsRoutingModule } from "./supports-routing.module";
import { TicketsComponent } from "./tickets/tickets.component";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";
import { DeleteDialogComponent } from "./tickets/dialog/delete/delete.component";
import { FormDialogComponent } from "./tickets/dialog/form-dialog/form-dialog.component";
import { TicketsService } from "./tickets/tickets.service";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    TicketsComponent,
    TicketDetailsComponent,
    DeleteDialogComponent,
    FormDialogComponent,
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
    MatTabsModule,
    MatTooltipModule,
    MatTableExporterModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    SupportsRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [TicketsService],
})
export class SupportsModule {}
