import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
  //confirm before navigating away
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');
    return of(confirmation);
  }
}
