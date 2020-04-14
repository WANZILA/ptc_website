import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ProgrammeResolved } from './programme';
import { ProgrammeService } from './programme.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class ProgrammeResolver implements Resolve<ProgrammeResolved>{
	// message: string ='';
	constructor( private programmeService: ProgrammeService){}

	resolve(route: ActivatedRouteSnapshot,
	        state: RouterStateSnapshot):Observable<ProgrammeResolved>{
				//const id = route.paramMap.get('programmeId');
				const programmeId = route.paramMap.get('programmeId');

				//checking if its a number
				if(isNaN(+programmeId)){
					const message = `Product programmeId was not a number : ${programmeId}`;
					return of ({ programme: null, error: message });
				}
				return this.programmeService.getProgramme(+programmeId)
				 .pipe(
						map(programme => ({ programme: programme })),
						catchError(error => {
							const message = `Retrieval error: ${error}`;
							console.error(message);
							return of({ programme: null, error: message});
						})
					);

			}
}