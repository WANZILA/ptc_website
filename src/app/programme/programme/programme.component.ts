import { Component, OnInit } from '@angular/core';
// import { switchMap } from 'rxjs/operators';
// import { ActivatedRoute } from '@angular/router';

//import { ProgrammeService } from './programme.service';
// import { Programme } from '../programme';
// import { Observable } from 'rxjs';
import { ProgrammeService } from '../programme.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  // programmes$: Observable<Programme[]>;
  // selectedId: number;
  // programmes: Programme[];
  

  constructor(
    // private programmeService: ProgrammeService,
    
    ) {     }

  ngOnInit(): void {
    // this.programmes$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = +params.get('id');
    //     return this.service.getProgrammes();
    //   })
    // )
    // this.programmeService.getProgrammes().subscribe(
    //   // programmes => {
    //   //   this.programmes = programmes;
    //   // }
    // )

  }
  


}
