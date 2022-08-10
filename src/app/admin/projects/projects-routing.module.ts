import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Page404Component } from "../../authentication/page404/page404.component";
import { AddprojectsComponent } from "./add-project/add-project.component";
import { AllprojectsComponent } from "./all-projects/all-projects.component";
const routes: Routes = [
  {
    path: "addProject",
    component: AddprojectsComponent,
  },
  {
    path: "allProjects",
    component: AllprojectsComponent,
  },
  {
    path: "projectDetails",
    component: ProjectDetailsComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
