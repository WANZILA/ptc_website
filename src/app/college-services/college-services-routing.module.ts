import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LibraryComponent } from './library/library.component';
//import { LibraryComponent } from '../college-servies/library/library.component';
//import { NgModel } from '@angular/forms';
import { GuestAccomodationComponent } from './guest-accomodation/guest-accomodation.component';
import { GardenHireComponent } from './garden-hire/garden-hire.component';
import { WebServicesComponent } from './web-services/web-services.component';

const routes: Routes = [
    {
        path:'library',
        component: LibraryComponent
    },
    {
        path:'accomodation',
        component: GuestAccomodationComponent
    },
    {
        path:'groundHire',
        component: GardenHireComponent
    },
    {
        path:'WebDevelopment',
        component:WebServicesComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CollegeServicesRoutingModule{}

