import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';
import { TestmoniesComponent } from './testmonies/testmonies.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';

const routes: Routes = [
  {
    path: 'applynow', component: ApplyNowComponent
  }
]

@NgModule({
  declarations: [ 
    ApplyNowComponent,
    TestmoniesComponent 
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CommonModule,
    FormsModule,
    ApplyNowComponent,
    TestmoniesComponent,
    RouterModule
    
  ]
})
export class SharedModule { }
