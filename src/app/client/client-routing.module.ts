import { Page404Component } from "../authentication/page404/page404.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BillingComponent } from "./billing/billing.component";
import { SettingsComponent } from "./settings/settings.component";
const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "supports",
    loadChildren: () =>
      import("./supports/supports.module").then((m) => m.SupportsModule),
  },
  {
    path: "billing",
    component: BillingComponent,
  },
  {
    path: "settings",
    component: SettingsComponent,
  },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
