import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTableExporterModule } from "mat-table-exporter";
import { MatRadioModule } from "@angular/material/radio";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { EmployeeRoutingModule } from "./employee-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormComponent } from "./attendance/form/form.component";
import { MyTeamsComponent } from "./myteam/myteam.component";
import { SettingsComponent } from "./settings/settings.component";
import { AttendancesService } from "./attendance/attendance.service";
import { AttendancesComponent } from "./attendance/attendance.component";
import { MyLeavesComponent } from "./my-leaves/my-leaves.component";
import { FormDialogComponent } from "./my-leaves/dialogs/form-dialog/form-dialog.component";
import { DeleteDialogComponent } from "./my-leaves/dialogs/delete/delete.component";
import { FormComponent as MyProjectFormDialog } from "./my-projects/form/form.component";
import { MyLeavesService } from "./my-leaves/my-leaves.service";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { MyProjectsService } from "./my-projects/my-projects.service";
import { MyTasksComponent } from "./my-tasks/my-tasks.component";
import { MyTasksService } from "./my-tasks/my-tasks.service";
import { FormDialogComponent as myTaskFormDialogComponent } from "./my-tasks/dialogs/form-dialog/form-dialog.component";
import { DeleteComponent as myTaskDeleteComponent } from "./my-tasks/dialogs/delete/delete.component";
import { ComponentsModule } from "../shared/components/components.module";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
    AttendancesComponent,
    FormComponent,
    MyTeamsComponent,
    SettingsComponent,
    MyLeavesComponent,
    FormDialogComponent,
    DeleteDialogComponent,
    MyProjectsComponent,
    MyProjectFormDialog,
    MyTasksComponent,
    myTaskFormDialogComponent,
    myTaskDeleteComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    chartjsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    PerfectScrollbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatTabsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatTooltipModule,
    MatTableExporterModule,
    MatProgressBarModule,
    MatRadioModule,
    DragDropModule,
    MatProgressSpinnerModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [
    AttendancesService,
    MyLeavesService,
    MyProjectsService,
    MyTasksService,
  ],
})
export class EmployeeModule {}
