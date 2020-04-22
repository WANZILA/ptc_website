import { InMemoryDbService } from 'angular-in-memory-web-api';

//import { Product } from './pro';
import { IProgramme } from 'src/app/programme/programme';

export class ProgrammeData implements InMemoryDbService {

  createDb() {
    const programmes: IProgramme[] = [
      {
        
        'id': 1,
        'programmeName':'Diploma in Bibilical Theology',
        'programmeImageUrl':  '../assets/img/programmes/theology.jpg',
        'programme_description':[ 'General church History. This unit is designed to give an over view of history of the church from birth through Reformation(1517) to the present. An introduction of African church History with a focus in the activities of the missionaries in Africa',
                                  'World Religions. The unit is a survey of the major world religions with a greater emphasis on their origin and doctrinal positions.',
                                  'Christian education. The unit focuses on the development of education in the church with attentions being given to Sunday school, leadership training, children’s ministry, youth ministry, adult ministries and other related church ministries.',
                                  'Communication skills. The unit is designed to help students interpret written information and apply conventional methods of communication in the English language.'
                                ],
        'programme_objectives': [],
        'programme_outcomes' : [],
        'programme_tuition': '300,000',
        'programme_duration': '2 years',
                                              
      },
      {

        'id': 2,
        'programmeName':'Certificate in Church Ministry',
        'programmeImageUrl':  '../assets/img/programmes/theology.jpg',
        'programme_description':[ ''],
        'programme_objectives': ['learn to preach','love God'],
        'programme_outcomes' : [],
        'programme_tuition': '300,000',
        'programme_duration': '2 years',
                                              
      },
      {

        'id': 3,
        'programmeName':'Diploma in Information Communication Technology',
        'programmeImageUrl':  '../assets/img/programmes/ict.jpg',
        'programme_description':[ `Information Technology program is designed to provide learners with foundational skills, knowledge and competencies in
                                  ICTs that enable them to install, oversee, tune, trouble-shoot and maintain computer systems and design solutions to
                                  common ICT challenges in organizations and among individual ICTs users. It is intended to provide learners with hands-on 
                                  abilities so they can be ICT support staff in an organization or to start their own ICT services to meet the pervasive 
                                  need for ICT technicians as computers become a must-have and essential gadget.`],
        'programme_objectives': [  
                            'Introducing the students to concepts, with theoretical and practical skills in Information Communications Technology (ICT).',
                            'Prepare students to undertake further studies in ICT fields.',
                            'Equipping students with skills and knowledge to manage and maintain computer systems.',
                            'Equipping students with skills for self-employment.',
                            'Stimulate the learners’ creative mind to participate in development of ICT-based applications.'],
        'programme_outcomes' : [
                            'Apply the concepts, theoretical, and practical skills in Information Communications Technology (ICT).', 
                            'Pursue further studies in ICT fields.', 
                            'Manage and maintain computer systems.',
                            'Utilize the skills and knowledge of ICT for self-employment.',
                            'Demonstrate creativity in the development of ICT-based applications.'
        ],
        'programme_tuition': '495,000',
        'programme_duration': '2 years',
                                              
      }
      ,
      {

        'id': 4,
        'programmeName':'Certificate in Information Communication Technology',
        'programmeImageUrl':  '../assets/img/programmes/ict.jpg',
        'programme_description':[ `Information Technology program is designed to provide learners with foundational skills, knowledge and competencies in
                                  ICTs that enable them to install, oversee, tune, trouble-shoot and maintain computer systems and design solutions to
                                  common ICT challenges in organizations and among individual ICTs users. It is intended to provide learners with hands-on 
                                  abilities so they can be ICT support staff in an organization or to start their own ICT services to meet the pervasive 
                                  need for ICT technicians as computers become a must-have and essential gadget.`],
        'programme_objectives': [  
                            'Introducing the students to concepts, with theoretical and practical skills in Information Communications Technology (ICT).',
                            'Prepare students to undertake further studies in ICT fields.',
                            'Equipping students with skills and knowledge to manage and maintain computer systems.',
                            'Equipping students with skills for self-employment.',
                            'Stimulate the learners’ creative mind to participate in development of ICT-based applications.'],
        'programme_outcomes' : [
                            'Apply the concepts, theoretical, and practical skills in Information Communications Technology (ICT).', 
                            'Pursue further studies in ICT fields.', 
                            'Manage and maintain computer systems.',
                            'Utilize the skills and knowledge of ICT for self-employment.',
                            'Demonstrate creativity in the development of ICT-based applications.'
        ],
        'programme_tuition': '495,000',
        'programme_duration': '1 year',
                                              
      },
      {

        'id': 5,
        'programmeName':'',
        'programmeImageUrl':  '../assets/img/programmes/theology.jpg',
        'programme_description':[ ''],
        'programme_objectives': [],
        'programme_outcomes' : [],
        'programme_tuition': '',
        'programme_duration': '',
                                              
      }
      // ,
      // {

      //   'id': ,
      //   'programmeName':'',
      //   'programmeImageUrl':  '../assets/img/programmes/theology.jpg',
      //   'programme_description':[ ''],
      //   'programme_objectives': [],
      //   'programme_outcomes' : [],
      //   'programme_tuition': '',
      //   'programme_duration': '',
                                              
      // }
      // {
      //   'Id': 2,
      //   'programmeName':'Diploma in Church Ministry'        
      // }   
    ];
    return {  programmes };
  }
}
