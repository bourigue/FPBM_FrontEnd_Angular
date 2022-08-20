import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEtudiantsComponent } from './all-etudiants/all-etudiants.component';

const routes: Routes = [
  {
    path: "all-etudiants",
    component: AllEtudiantsComponent,
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
