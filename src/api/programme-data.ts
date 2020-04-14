import { InMemoryDbService } from 'angular-in-memory-web-api';

//import { Product } from './pro';
import { IProgramme } from 'src/app/programme/programme';

export class ProgrammeData implements InMemoryDbService {

  createDb() {
    const programmes: IProgramme[] = [
      {
        'id': 1,
        'programmeName':'Certificate in Church Ministry',
        'programmeImageUrl':  '../assets/img/programmes/theology.jpg',
        'programme_description':[ 'The core course units covered are:',
                                  '<b>General church History.</b> This unit  is designed to give an over view of history of the church from birth through Reformation(1517) to the present. An introduction of African church History with a focus in the activities of the missionaries in Africa'],
        'programme_objectives': ['learn to preach'],
        'programme_outcomes' : ['effective leaders'],
        'programme_tuition': '300,000',
        'programme_duration': '2 years',
                                              
      }, 
      // {
      //   'Id': 2,
      //   'programmeName':'Diploma in Church Ministry'        
      // }   
    ];
    return {  programmes };
  }
}
