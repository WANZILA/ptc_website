import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgrammeService } from '../programme.service';
// import { switchMap } from 'rxjs/operators';
// import { ActivatedRoute } from '@angular/router';


import { IProgramme } from '../programme';
// import { Observable } from 'rxjs';
//import { ProgrammeService } from '../programme.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  
  programmes: IProgramme[] =[];
  
  filteredProgrammes: IProgramme[];
  // programmes$: Observable<Programme[]>;
  // selectedId: number;
  //create a property for filtering programmes
 // _listFilter: string ='Diploma';
 _listFilter: string; 
  errorMessage ="";
 

  //creating a getter to read values and setter to change filtered valuess
  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProgrammes = this.listFilter ? this.performFilter(this.listFilter) : this.programmes;
  }
  //setting default values
  constructor(
    private programmeService: ProgrammeService,
        
    ) { 
      
      //this.listFilter = '';
        }

        ngOnInit(): void {
          this.programmeService.getProgrammes().subscribe({
            next: programmes  => {
              this.programmes = programmes
              this.filteredProgrammes = this.programmes;
            },
            error: err => this.errorMessage = err
          });
      }
      
  performFilter(filterBy: string): IProgramme[] { 
      filterBy = filterBy.toLocaleLowerCase();
      return this.programmes.filter((programme: IProgramme) =>
        programme.programmeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }
   
  onClickAll():void{
     this.listFilter = '';
  }
  onClickDiploma():void {
    this.filteredProgrammes = this.programmes;
    this.listFilter = 'Diploma';
  }
  onClickCertificate():void {
    // this.filteredProgrammes = this.programmes;
       this.listFilter = 'Certificate';
  }


}
