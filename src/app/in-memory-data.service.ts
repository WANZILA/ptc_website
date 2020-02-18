import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Programme} from './programme/programme';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const programmes = [
            {
                'id': 1,
                'programme':`   <h2> hi </h2>`
            },
            {
                'id': 2,
                'programme':`   diploma`
            }
        ];
    return { programmes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(programmes: Programme[]): number {
    return programmes.length > 0 ? Math.max(...programmes.map( programme => programme.id)) + 1 : 1;
  }
}