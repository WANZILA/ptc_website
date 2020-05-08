import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgrammeRoutingModule } from './programme-routing.module';
import { ProgrammeComponent } from './programme/programme.component';
import { SharedModule } from '../shared/shared.module';
import { ProgrammeDetailComponent } from './programme-detail/programme-detail.component';
import { ProgrammeEditComponent } from './programme-edit/programme-edit.component';
import { ProgrammeEditObjectivesOutcomesComponent } from './programme-edit/programme-edit-objectives-outcomes/programme-edit-objectives-outcomes.component';
import { ProgrammeEditCourseDescriptionComponent } from './programme-edit/programme-edit-course-description/programme-edit-course-description.component';


@NgModule({
  declarations: [
	  ProgrammeComponent,
    ProgrammeDetailComponent, 
    ProgrammeEditComponent, 
    ProgrammeEditObjectivesOutcomesComponent, 
    ProgrammeEditCourseDescriptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProgrammeRoutingModule
  ],
  exports:[
    ProgrammeComponent
  ]
})
export class ProgrammeModule { }
