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



const routes: Routes = [

  {
    path: 'programme', component: ProgrammeComponent,
    children:[ 
      {
        path: 'programme-diploma', component: ProgrammeDiplomaComponent
      },
      {
        path: 'programme-certificate', component: ProgrammeCertificateComponent
      }     
    ]
  },
  {
    path: 'programme-diploma-counseling-and-guidance', component: ProgrammeDiplomaCounselingAndGuidanceComponent
  },
  {
    path: 'programme-diploma-bible-theology',component: ProgrammeDiplomaBibleTheologyComponent
  },
  {
    path: 'programme-diploma-it', component: ProgrammeDiplomaItComponent
  },
  {
    path: 'programme-diploma-agri-business', component: ProgrammeDiplomaAgriBusinessComponent
  },
  {
    path: 'programme-diploma-socail-dev', component: ProgrammeDiplomaSocailDevComponent
  },
  {
    path: 'programme-diploma-child-dev', component: ProgrammeDiplomaChildDevComponent
  },
  {
    path: 'programme-tuition', component: ProgrammeTuitionComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgrammeRoutingModule { }
