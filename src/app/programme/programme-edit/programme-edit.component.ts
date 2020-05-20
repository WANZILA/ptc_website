import { Component, OnInit } from '@angular/core';
import { IProgramme, ProgrammeResolved } from '../programme';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgrammeService } from '../programme.service';

@Component({
  selector: 'app-programme-edit',
  templateUrl: './programme-edit.component.html',
  styleUrls: ['./programme-edit.component.css']
})
export class ProgrammeEditComponent implements OnInit {
  pageTitle = 'Programme Edit';
  errorMessage: string;

  programme: IProgramme;

  //hols the validation state of every tab
  private dataIsValid: {[key: string]: boolean} = {};

  constructor( private route: ActivatedRoute,
               private router: Router,
               private programmeService: ProgrammeService) { }

  ngOnInit() {

  
      this.route.data.subscribe( data => {
      const resolvedData: ProgrammeResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onProgrammeRetrieved(resolvedData.programme);
    })
  }

  onProgrammeRetrieved(programme: IProgramme): void{
    this.programme = programme;

    if(!this.programme){
      this.pageTitle = 'No programme found';
    } else {
      if(this.programme.id === 0){
        this.pageTitle = 'Add product';
      }else {
        this.pageTitle = `Edit Programme: ${this.programme.programmeName}`;
      }
    }
  }

  deleteProgramme():void{
    if(this.programme.id === 0){
      //don't delete
      this.onSaveComplete(`${this.programme.programmeName} was deleted`);
    } else {
      if(confirm(`Really delete the programme: ${this.programme.programmeName}?`)){
        this.programmeService.deleteProgramme(this.programme.id)
            .subscribe(
              () => this.onSaveComplete(`${this.programme.programmeName} was deleted`),
              (error: any) => this.errorMessage = <any>error
            );
      }
    }
  }


  //checks for validation before saving
  isValid(path?: string): boolean{
    this.validate();
    //checks the specific or current tab
    if(path){
      return this.dataIsValid[path];
    }

    //checks every entry in the data structure of that tab and 
      //returns only if true
      return( this.dataIsValid &&
            Object.keys(this.dataIsValid).every(d => this.dataIsValid[d] === true));
  }


  onSaveComplete(message?: string):void{
    if(message){
      //rs in  pdt edit .comp.ts
      // this.messageService.addMessage(message);
      console.log('message successiful');
    }
    //navigate back
    this.router.navigate(['/programmes']);

  }


  validate(): void{

    //clear the validatoion object

    this.dataIsValid = {};

    // 'course_description'

    if(this.programme.programmeName &&
        this.programme.programmeName.length >= 3){
          this.dataIsValid['course_description'] = true;
      } else{
        this.dataIsValid['course_description'] = false;
      }

      //'course_objectives

  }

}
