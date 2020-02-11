import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ProgrammeResolver implements Resolve<Product>{
	resolve(route: ActivatedRouteSnapshot,
	        state: RouterStateSnapshot):Observable<Product>
}