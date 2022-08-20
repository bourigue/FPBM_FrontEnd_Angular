import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/authentication/page404/page404.component';
import { ToutprofesseurComponent } from './toutprofesseur/toutprofesseur.component';

const routes: Routes = [
  {
    path: "toutprofesseur",
    component: ToutprofesseurComponent,
  },
 
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
