import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { StudentLifeComponent } from './student-life/student-life.component';
import { ApplicationProcedureComponent } from './application-procedure/application-procedure.component';
import { IntakesComponent } from './intakes/intakes.component';

//import { StudentLifeComponent } from './student-life.component';



const routes: Routes =[
    {
        path: 'studentLife',
        component: StudentLifeComponent
    },
    {
        path: 'application',
        component: ApplicationProcedureComponent
    },
    {
        path:'intakes',
        component: IntakesComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[ RouterModule ]

})

export class StudentDashboardRoutingModule{}
