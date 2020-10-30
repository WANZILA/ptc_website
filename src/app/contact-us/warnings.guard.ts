import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


import { ContactUsComponent } from './contact-us/contact-us.component';
import { DialogService } from './dialog.service';
@Injectable({
  providedIn: 'root'
})

//  export interface CanComponentDeactivate{
//    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
//  }

export class WarningsGuard implements CanDeactivate<ContactUsComponent>{
  constructor( private dialogService: DialogService){}
  canDeactivate(
    component: ContactUsComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
       //get the crisis center 
       console.log(route.paramMap.get('id'));

       //dget the url
       console.log(state.url);

       //allow synchronous navigation ('true') if no data changeed
      //  if( component.name === ''){
      //    return true;
      //  }
      return this.dialogService.confirm('Discard changes');
  }
  
}
