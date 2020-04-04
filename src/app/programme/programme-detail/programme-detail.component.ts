import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { IProgramme, ProgrammeResolved} from '../programme';


@Component({
  selector: 'app-programme-detail',
  templateUrl: './programme-detail.component.html',
  styleUrls: ['./programme-detail.component.css']
})
export class ProgrammeDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  programme: IProgramme;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit():void {
    const resolvedData: ProgrammeResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProgrammeRetrived(resolvedData.programme);
  }
    onProgrammeRetrived( programme: IProgramme ): void{
      this.programme = programme;
      if(this.programme){
        this.pageTitle = `Programme Detail:${this.programme.programmeName}`;
      } else{
        this.pageTitle = 'No Programme found';
      }


    }
    
  }


