import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Programme } from './programme';
//import { PROGRAMMES } from './programme-data';

@Injectable({
    providedIn: 'root'
})


export class ProgrammeService{
    private programmesUrl = 'api/programme'
    constructor( private http: HttpClient){}

    // getProgrammes():Observable<Programme[]>{
    //     return this.http.get<Programme[]>(this.programmesUrl)
    //         .pipe(
    //             tap(data => console.log(JSON.stringify(data))),
    //             catchError(this.handleError)
    //         );
    // }

    // getProgramme(id: number ): Observable<Programme>{
    //     if(id === 0 ){
    //         return of(this.initializeProgramme());
    //     }
    //     const url = `${this.programmesUrl}/${id}`;
    //     return this.http.get<Programme>(url)
    //     .pipe(
    //         tap(data => console.log('getProgramme:' + JSON.stringify(data))),
    //         catchError(this.handleError)
    //     );
    // }

    // private handleError(err){
    //     let errorMessage: string;
    //     if(err.error instanceof ErrorEvent){
    //         errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    //     }
    //     console.error(err);
    //     return throwError(errorMessage);
    // }

    // private initializeProgramme(): Programme {
    //     return{
    //         id: 0,
    //         programme: null
    //     };
    // }

}

