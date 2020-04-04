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
	message: string ='';
	constructor( private programmeService: ProgrammeService){}

	resolve(route: ActivatedRouteSnapshot,
	        state: RouterStateSnapshot):Observable<ProgrammeResolved>{
				const id = route.paramMap.get('id');

				//checking if its a number
				if(isNaN(+id)){
					const message = `Product id was not a number : ${id}`;
					return of ({ programme: null, error: message });
				}
				return this.programmeService.getProgramme(+id)
				 .pipe(
						map(programme => ({ programme: programme })),
						catchError(error => {
							const message = `Retrieval error: ${error}`;
							console.error(message);
							return of ({ programme: null, error: message});
						})
					);

			}
}