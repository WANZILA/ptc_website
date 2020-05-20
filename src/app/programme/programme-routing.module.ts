import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammeComponent } from './programme/programme.component';
import { ProgrammeDetailComponent } from './programme-detail/programme-detail.component';
import { ProgrammeEditComponent } from './programme-edit/programme-edit.component';
import { ProgrammeResolver } from './programme-resolver.service';
import { ProgrammeEditObjectivesOutcomesComponent } from './programme-edit/programme-edit-objectives-outcomes/programme-edit-objectives-outcomes.component';
import { ProgrammeEditCourseDescriptionComponent } from './programme-edit/programme-edit-course-description/programme-edit-course-description.component';
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
            path: '',
            redirectTo: 'courseDescription',
            pathMatch: 'full'        
          },
          {
            path: 'courseDescription',
            component: ProgrammeEditCourseDescriptionComponent
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
