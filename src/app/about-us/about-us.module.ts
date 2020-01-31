import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponentComponent } from './history-component/history-component.component';
import { AdministratorComponentComponent } from './administrator-component/administrator-component.component';
import { AboutUsRoutingModule } from './about-us-routing.module';


@NgModule({
  declarations: [
    HistoryComponentComponent,
    AdministratorComponentComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
