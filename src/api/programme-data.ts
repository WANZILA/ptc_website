import { InMemoryDbService } from 'angular-in-memory-web-api';

//import { Product } from './pro';
import { IProgramme } from 'src/app/programme/programme';

export class ProgrammeData implements InMemoryDbService {

  createDb() {
    const programmes: IProgramme[] = [
      {
        'programmeId': 1,
        'programmeName':'Certificate in Church Ministry'
        
      }
      
     
    ];
    return {  programmes };
  }
}
