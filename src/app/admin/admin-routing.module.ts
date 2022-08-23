import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  {
    path: "professeur",
    loadChildren: () =>
      import("./professeur/professeur.module").then((m) => m.ProfesseurModule),
  },
 
  {
    path: "employees",
    loadChildren: () =>
      import("./employees/employees.module").then((m) => m.EmployeesModule),
  },
  
 

  
  {
    path: "etudiants",
    loadChildren: () =>
      import("./etudiants/etudiants.module").then((m) => m.EtudiantsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
