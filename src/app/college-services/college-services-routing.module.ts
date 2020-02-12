import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LibraryComponent } from '../college-servies/library/library.component';
//import { NgModel } from '@angular/forms';

const routes: Routes = [
    {
        path:'library',
        component: LibraryComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CollegeServicesRoutingModule{}

