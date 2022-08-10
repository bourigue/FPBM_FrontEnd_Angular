import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEtudiantsComponent } from './all-etudiants/all-etudiants.component';
import { AlllEtudiantComponent } from './alll-etudiant/alll-etudiant.component';

const routes: Routes = [
  {
    path: "all-etudiants",
    component: AllEtudiantsComponent,
  },
  {
    path: "alll-etudiants",
    component: AlllEtudiantComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantsRoutingModule { }
