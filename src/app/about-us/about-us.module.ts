import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { HistoryComponentComponent } from './history-component/history-component.component';
import { AdministratorComponentComponent } from './administrator-component/administrator-component.component';
import { AboutUsRoutingModule } from './about-us-routing.module';


@NgModule({
  declarations: [
    HistoryComponentComponent,
    AdministratorComponentComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
