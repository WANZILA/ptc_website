import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammeCertificateComponent } from './programme-certificate/programme-certificate.component';
import { ProgrammeDiplomaBibleTheologyComponent } from './programme-diploma-bible-theology/programme-diploma-bible-theology.component';
import { ProgrammeDiplomaItComponent } from './programme-diploma-it/programme-diploma-it.component';
import { ProgrammeDiplomaAgriBusinessComponent } from './programme-diploma-agri-business/programme-diploma-agri-business.component';
import { ProgrammeDiplomaSocailDevComponent } from './programme-diploma-socail-dev/programme-diploma-socail-dev.component';
import { ProgrammeDiplomaChildDevComponent } from './programme-diploma-child-dev/programme-diploma-child-dev.component';
import { ProgrammeDiplomaCounselingAndGuidanceComponent } from './programme-diploma-counseling-and-guidance/programme-diploma-counseling-and-guidance.component';
import { ProgrammeDiplomaComponent } from './programme-diploma/programme-diploma.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammeTuitionComponent } from './programme-tuition/programme-tuition.component';
import { ProgrammeDetailComponent } from './programme-detail/programme-detail.component';
import { ProgrammeEditComponent } from './programme-edit/programme-edit.component';
import { ProgrammeResolver } from './programme-resolver.service';
import { ProgrammeEditObjectivesOutcomesComponent } from './programme-edit/programme-edit-objectives-outcomes/programme-edit-objectives-outcomes.component';
//import { ProgrammeEditComponent } from './programme-edit.component';



const routes: Routes = [

  {
    path: 'programmes', 
    children:[
      {
        path: '', 
        component: ProgrammeComponent,
      },
      {
        path: ':programmeId', component: ProgrammeDetailComponent,
        resolve:{ resolvedData: ProgrammeResolver}
      },
      {
        path: ':programmeId/edit', component: ProgrammeEditComponent,
        resolve:{ resolvedData: ProgrammeResolver},
        children: [
          {
            path: 'courseDescription',
            component: ProgrammeEditObjectivesOutcomesComponent
          },
          {
            path: 'objectivesOutcomes',
            component: ProgrammeEditObjectivesOutcomesComponent
          }
        ]
      }
    ]
    
  }

 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeRoutingModule { }
