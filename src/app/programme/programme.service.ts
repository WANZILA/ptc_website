import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Programme } from './programme';
import { PROGRAMMES } from './programme-data';

@Injectable({
    providedIn: 'root'
})


export class ProgrammeService{
    //private programmesUrls = 'api/programmes'
    constructor(){}
    getProgrammes():Observable<Programme[]>{
        return of(PROGRAMMES);
    }

    getProgramme(id: number | string){
        return this.getProgrammes().pipe(
            map((programmes: Programme[]) => programmes.find(programme => programme.id ===+id))
        );
    }

}

