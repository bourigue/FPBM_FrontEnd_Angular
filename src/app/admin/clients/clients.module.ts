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
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AddClientComponent } from "./add-client/add-client.component";
import { EditClientComponent } from "./edit-client/edit-client.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { ClientsService } from "./all-clients/clients.service";
import { FormDialogComponent } from "./all-clients/dialog/form-dialog/form-dialog.component";
import { DeleteDialogComponent } from "./all-clients/dialog/delete/delete.component";
import { ClientRoutingModule } from "./clients-routing.module";
import { AllclientComponent } from "./all-clients/all-clients.component";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    AllclientComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    AddClientComponent,
    EditClientComponent,
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
    MatToolbarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableExporterModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    ClientRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [ClientsService],
})
export class ClientModule {}
