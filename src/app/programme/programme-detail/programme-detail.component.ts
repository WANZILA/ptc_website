import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable }  from 'rxjs';
import {switchMap } from 'rxjs/operators';
import  { IProgramme, ProgrammeResolved} from '../programme';
import { ProgrammeService } from '../programme.service';


@Component({
  selector: 'app-programme-detail',
  templateUrl: './programme-detail.component.html',
  styleUrls: ['./programme-detail.component.css']
})
export class ProgrammeDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  programme: IProgramme;
  errorMessage: string;

  Programme2$: Observable <IProgramme>

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProgrammeService
  ) { }

  ngOnInit():void {
    const resolvedData: ProgrammeResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProgrammeRetrived(resolvedData.programme);
   
    this.Programme2$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getProgramme(params.get('id')))
    );
  }
    onProgrammeRetrived( programme: IProgramme ): void{
      this.programme = programme;
      if(this.programme){
        this.pageTitle = `Programme Detail:${this.programme.programmeName}`;
      } else{
        this.pageTitle = 'No Programme found';
      }

    }

    //go back to programme list
    goBackToProgrammes(programme: IProgramme){
      const progId = programme ? programme.id : null ;
      this.router.navigate(['../', {id: programme}]);

    }
    
  }


