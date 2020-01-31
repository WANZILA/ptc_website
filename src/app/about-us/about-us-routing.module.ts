import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoryComponentComponent } from './history-component/history-component.component';
import { AdministratorComponentComponent } from './administrator-component/administrator-component.component';


const routes: Routes = [
  {
    path: 'history', component: HistoryComponentComponent
  },
  {
    path: 'administrators',component: AdministratorComponentComponent
  }
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
