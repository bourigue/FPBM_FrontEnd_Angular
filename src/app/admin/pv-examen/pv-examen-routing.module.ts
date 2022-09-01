import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from 'src/app/authentication/page404/page404.component';
import { PvetudiantComponent } from './pvetudiant/pvetudiant.component';
import { PvExamenComponent } from './toutexamen/pv-examen.component';



  const routes: Routes = [
    {
      path: "pv-examen",
      component: PvExamenComponent
      
     },
     { path: "pvetudiant",
      component: PvetudiantComponent
      },
    
 
   // {
      //path: "u-employee",
      //component: EditEmployeeComponent,
    //},
   
    { path: "**", component: Page404Component },
  ];


@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PvExamenRoutingModule { }
