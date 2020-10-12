import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library/library.component';
import { CollegeServicesRoutingModule } from './college-services-routing.module';
import { GuestAccomodationComponent } from './guest-accomodation/guest-accomodation.component';
import { GardenHireComponent } from './garden-hire/garden-hire.component';
import { WebServicesComponent } from './web-services/web-services.component';



@NgModule({
  declarations: [
     LibraryComponent,
     GuestAccomodationComponent, 
     GardenHireComponent, 
     WebServicesComponent
    ],
  imports: [
    CommonModule,
    CollegeServicesRoutingModule
  ]
})
export class CollegeServicesModule { }
