import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WarningsGuard }  from './warnings.guard';


const routes: Routes = [
  {
    path: 'contact-us', component: ContactUsComponent,
    canDeactivate: [ WarningsGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
