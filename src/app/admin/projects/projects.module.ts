import { TruncatePipe, PluralPipe } from "./all-projects/core/pipes";
import { ProjectDialogComponent } from "./all-projects/project-dialog/project-dialog.component";
import { BoardComponent } from "./all-projects/board/board.component";
import { AllprojectsComponent } from "./all-projects/all-projects.component";

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
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatMenuModule } from "@angular/material/menu";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatChipsModule } from "@angular/material/chips";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { ProjectsRoutingModule } from "./projects-routing.module";
import { AddprojectsComponent } from "./add-project/add-project.component";
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { ComponentsModule } from "src/app/shared/components/components.module";

@NgModule({
  declarations: [
    AddprojectsComponent,
    AllprojectsComponent,
    BoardComponent,
    ProjectDialogComponent,
    TruncatePipe,
    PluralPipe,
    ProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
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
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    DragDropModule,
    MatChipsModule,
    MatProgressBarModule,
    MatTabsModule,
    CKEditorModule,
    ComponentsModule,
  ],
  providers: [],
})
export class ProjectsModule {}
