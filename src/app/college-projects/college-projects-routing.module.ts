import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ ProjectsComponent } from './projects/projects.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';


const routes: Routes = [
  {
      path: 'projects',
      component: ProjectsComponent
  },
  {
    path: 'scholarships',
    component: ScholarshipComponent
  } 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollegeProjectsRoutingModule { }
