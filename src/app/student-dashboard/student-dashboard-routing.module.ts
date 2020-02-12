import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { StudentLifeComponent } from './student-life/student-life.component';
import { ApplicationProcedureComponent } from './application-procedure/application-procedure.component';

//import { StudentLifeComponent } from './student-life.component';



const routes: Routes =[
    {
        path: 'studentLife',
        component: StudentLifeComponent
    },
    {
        path: 'application',
        component: ApplicationProcedureComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[ RouterModule ]

})

export class StudentDashboardRoutingModule{}
