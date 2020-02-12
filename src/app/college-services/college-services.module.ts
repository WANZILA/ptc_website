import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library/library.component';
import { CollegeServicesRoutingModule } from './college-services-routing.module';



@NgModule({
  declarations: [LibraryComponent],
  imports: [
    CommonModule,
    CollegeServicesRoutingModule
  ]
})
export class CollegeServicesModule { }
