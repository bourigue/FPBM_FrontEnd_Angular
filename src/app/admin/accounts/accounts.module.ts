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
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { AddPaymentComponent } from "./add-payment/add-payment.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { AllpaymentComponent } from "./allpayment/allpayment.component";
import { FormDialogComponent } from "./allpayment/dialog/form-dialog/form-dialog.component";
import { DeleteDialogComponent } from "./allpayment/dialog/delete/delete.component";
import { PaymentService } from "./allpayment/payment.service";
import { AccountsRoutingModule } from "./accounts-routing.module";
import { ComponentsModule } from "src/app/shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    AddPaymentComponent,
    InvoiceComponent,
    AllpaymentComponent,
    FormDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSortModule,
    MatToolbarModule,
    MatTableExporterModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [PaymentService],
})
export class AccountsModule {}
