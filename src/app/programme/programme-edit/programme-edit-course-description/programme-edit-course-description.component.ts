import { Component, OnInit, ViewChild } from '@angular/core';
import { IProgramme, ProgrammeResolved } from '../../programme';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-programme-edit-course-description',
  templateUrl: './programme-edit-course-description.component.html',
  styleUrls: ['./programme-edit-course-description.component.css']
})
export class ProgrammeEditCourseDescriptionComponent implements OnInit {
    @ViewChild(NgForm,{static:false}) programmeForm:NgForm;
    
    // pageTitle = 'Programme Edit';
    errorMessage: string;  
    programme: IProgramme;
  
    constructor( private route: ActivatedRoute) { }
  
    ngOnInit(): void {
       this.route.parent.data.subscribe( data =>{
         //resets the form 
         if(this.programmeForm){
           this.programmeForm.reset();
       }
        //refetches data
        this.programme = data['resolvedData'].programme;

      })
    }
  
}
