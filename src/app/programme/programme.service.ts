import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProgramme } from './programme';
//import { PROGRAMMES } from './programme-data';

@Injectable({
    providedIn: 'root'
})


export class ProgrammeService{

   //programmes is being got from in-memory-data.service
    //private programmesUrl = 'api/programme.json';
    private programmesUrl= 'api/programmes';

//    httpOptions = {
//        headers: new HttpHeaders({ 'Content-type': 'application/json'})
//    };
   
    constructor( 
        private http: HttpClient
        ){}

    getProgrammes():Observable<IProgramme[]>{
        return this.http.get<IProgramme[]>(this.programmesUrl)
            .pipe(
                tap(data => console.log('All:' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    getProgramme(programmeId: number): Observable<IProgramme> {
        if ( programmeId === 0) {
          return of(this.initializeProgramme());
        }
        const url = `${this.programmesUrl}/${programmeId}`;
        return this.http.get<IProgramme>(url)
          .pipe(
            tap(data => console.log('getProduct: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
      }

    private handleError(err){
        let errorMessage: string;
        if(err.error instanceof ErrorEvent){
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }

    private initializeProgramme(): IProgramme {
        return{
            programmeId: null,
            programmeName: null,
            // programmeImageUrl: null,	
            // programme_duration: null,
            // programme_tuition: null,
            // programme_description: null,
            // programme_objectives: null,
            // programme_outcomes: null,
         };
    }

}

