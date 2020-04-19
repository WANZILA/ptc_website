import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestmoniesComponent } from './testmonies/testmonies.component';
import { ApplyNowComponent } from './apply-now/apply-now.component';



@NgModule({
  declarations: [ 
    TestmoniesComponent, 
    ApplyNowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    TestmoniesComponent,
    ApplyNowComponent
  ]
})
export class SharedModule { }
