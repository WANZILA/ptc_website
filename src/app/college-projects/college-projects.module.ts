import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollegeProjectsRoutingModule } from './college-projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';


@NgModule({
  declarations:
   [
    ProjectsComponent, 
    ScholarshipComponent
  ],
  imports: [
    CommonModule,
    CollegeProjectsRoutingModule
  ]
})
export class CollegeProjectsModule { }
