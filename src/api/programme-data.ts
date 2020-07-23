import { InMemoryDbService } from 'angular-in-memory-web-api';

//import { Product } from './pro';
import { IProgramme } from 'src/app/programme/programme';

export class ProgrammeData implements InMemoryDbService {

  createDb() {
    const programmes: IProgramme[] = [
      {
        
        'id': 1,
        'programmeName':'Diploma in Bibilical Theology',
        'programmeImageUrl':  '../assets/img/programmes/theology1.jpg',
        'programme_description':[ 'General church History. This unit is designed to give an over view of history of the church from birth through Reformation(1517) to the present. An introduction of African church History with a focus in the activities of the missionaries in Africa',
                                  'World Religions. The unit is a survey of the major world religions with a greater emphasis on their origin and doctrinal positions.',
                                  'Christian education. The unit focuses on the development of education in the church with attentions being given to Sunday school, leadership training, children’s ministry, youth ministry, adult ministries and other related church ministries.',
                                  'Communication skills. The unit is designed to help students interpret written information and apply conventional methods of communication in the English language.'
                                ],
        'programme_objectives': [],
        'programme_outcomes' : [],
        'programme_tuition': '300,000',
        'programme_duration': '2 years',
        'programme_distance_learning': '200000'
                                              
      },
      {

        'id': 2,
        'programmeName':'Certificate in Church Ministry',
        'programmeImageUrl':  '../assets/img/programmes/theology1.jpg',
        'programme_description':[ ''],
        'programme_objectives': ['learn to preach','love God'],
        'programme_outcomes' : [],
        'programme_tuition': '300,000',
        'programme_duration': '2 years',
        'programme_distance_learning': '150000'
                                              
      },
      {

        'id': 3,
        'programmeName':'Diploma in Information Communication Technology',
        'programmeImageUrl':  '../assets/img/programmes/ict.jpg',
        'programme_description':[ `Information Technology program is designed to provide learners with foundational skills, knowledge and competencies in ICTs that enable them to install, oversee, tune, trouble-shoot and maintain computer systems and design solutions to
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
        'programme_distance_learning': 'Null'
                                              
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
        'programme_distance_learning': 'Null'
                                              
      },
      {

        'id': 5,
        'programmeName':' Diploma in Social Development',
        'programmeImageUrl':  '../assets/img/programmes/social_dev.jpg',
        'programme_description':[ `Social Development course is aimed at producing graduates who are equipped with 
                                    theoretical and practical skills to better the well-being of the people in the 
                                    comunity. They will guide communities, agricultural development agencies and 
                                    neighborhood organizations, providing leadership, services, harnessing and 
                                    sustaining the communal spirit for which African cultures are well known
                                     towards a planned community development in the society. They will be able
                                      to approach the people in the comunity with a passion motivated by God’s Word, 
                                      professional excellence and integrity of character, so as to bring about 
                                      holistic social development`],
        'programme_objectives': ['Developing the student\'s interest in studying community organization and development as a generalist social work practice.',
                                'Introduce students to human diversity in the political-economic, socio-cultural, and socio-ecological forces.',
                                'Equipping the students with practical skills and knowledge of social development.',
                                'Fostering the students attitude and professional responsibility towards community development.',
                                'Equipping students with the skills needed in evaluating the planned changes in local communities, organizations, institutions, and social action programs.'],
        'programme_outcomes' : [
                              'Demonstrate interest in community development as a generalist social work practice.',
                              'Discuss human diversity in the political-economic, socio-cultural, and socio-ecological forces.',
                              'Apply practical skills and knowledge of social development.',
                              'Demonstrate an attitude and professional responsibility towards community development.',
                              'Utilize the skills needed in evaluating the planned changes in local communities, organizations, institutions, and social action programs'
        ],
        'programme_tuition': '393,000',
        'programme_duration': '2 years',
        'programme_distance_learning': 'Null'
                                              
      }
      ,
      {

        'id': 6,
        'programmeName':' Diploma in AgriBusness',
        'programmeImageUrl':  '../assets/img/programmes/agric_business.jpg',
        'programme_description':[ `
                             This course is desiged to introduce students to the program of Agribusiness and help 
                             them appreciate Agribusiness in today’s global economy. The course will equip students 
                             with the knowledge and skills needed for keeping good records. Students will be
                              taught about how to gather capital and recourses needed to start a business. 
                              The class will discuss agribusiness at a global level and what opportunities and 
                              risks are present in today’s global economy.`],
        'programme_objectives': [
                              'Introduce students to the opportunities and constraints in Agribusiness.',
                              'Discuss the importance of records keeping.',
                              'Explore the resources and capital needed for Agribusiness.',
                              'Examine current issues in Agribusiness.'],
        'programme_outcomes' : [
                              'Discuss to the opportunities and constraints in Agribusiness.',
                              'Describe the importance of records keeping.',
                              'Apply knowledge and skills for recruiting resources and capital needed for Agribusiness.',
                              'Discuss current issues in Agribusiness.'
        ],
        'programme_tuition': '495,000',
        'programme_duration': '2 years',
        'programme_distance_learning': 'Null'
                                              
      },
      {

        'id': 7,
        'programmeName':' Certificate in AgriBusness',
        'programmeImageUrl':  '../assets/img/programmes/agric_business.jpg',
        'programme_description':[ `
                             This course is desiged to introduce students to the program of Agribusiness and help 
                             them appreciate Agribusiness in today’s global economy. The course will equip students 
                             with the knowledge and skills needed for keeping good records. Students will be
                              taught about how to gather capital and recourses needed to start a business. 
                              The class will discuss agribusiness at a global level and what opportunities and 
                              risks are present in today’s global economy.`],
        'programme_objectives': [
                              'Introduce students to the opportunities and constraints in Agribusiness.',
                              'Discuss the importance of records keeping.',
                              'Explore the resources and capital needed for Agribusiness.',
                              'Examine current issues in Agribusiness.'],
        'programme_outcomes' : [
                              'Discuss to the opportunities and constraints in Agribusiness.',
                              'Describe the importance of records keeping.',
                              'Apply knowledge and skills for recruiting resources and capital needed for Agribusiness.',
                              'Discuss current issues in Agribusiness.'
        ],
        'programme_tuition': '495,000',
        'programme_duration': '2 years',
        'programme_distance_learning': 'Null'
                                              
      }
      ,
      {

        'id': 8,
        'programmeName':' Diploma in Child Development',
        'programmeImageUrl':  '../assets/img/programmes/children.jpg',
        'programme_description':[ 
                              `Child Development course is aimed at producing graduates who are equipped with theoretical 
                              and practical skills to better the well-being of children. They will be able to approach children’s 
                              ministry with a passion motivated by God’s Word, professional excellence and integrity of character, 
                              so as to bring about holistic child development. As the students undergo this programme, 
                              they will move from courses focused on foundational theory to those that address accepted best practices
                              and the skills they need to help all categories of children in the diverse communities that they are a part of.
                              This programme also offers opportunities to help each student mature spiritually, 
                              as well as opportunities to connect with child-focused ministries through internships throughout Uganda.`
        ],
        'programme_objectives': [
                        'Introducing students to critical and major developments in children.',                                        
                        'Explore how the gospel is the foundation for children ministry.',
                        'Introduce students to the laws and policies which govern children’s rights.',
                        'Equip students with skills for counselling children and starting as well as sustaining projects.',
                        'Prepare students for research and further studies in child development.'
        ],
        'programme_outcomes' : [
                        'Discuss the critical and major developments in children.',
                        'Describe how the gospel is the foundation for children ministry.',
                        'Articulate how the laws and policies govern children’s rights.',
                        'Apply skills for counselling children, and starting and sustaining projects.',
                        'Demonstrate the knowledge and skills in research methods for further studies in child development.'
        ],
        'programme_tuition': '393,000',
        'programme_duration': '2 years',
        'programme_distance_learning': 'Null'
                                              
      }
      ,
      {

        'id': 9 ,
        'programmeName':'Diploma in Counseling and Guidance',
        'programmeImageUrl':  '../assets/img/programmes/cousel_guidance.jpg',
        'programme_description':[ `
                                This course introduces the students to different situations
                                araising from human relationship. use different skills and also develop human to human relationships. 
                                It educates the student about the different counselling methods 
                                                and mentoring types and their relevance to a variety of situations.`],
        'programme_objectives': [
                              'Introduce students to the basic concepts of counseling and guidance.',
                              'Identify the Biblical concepts of counseling that will help listeners make wise choices.',
                              'Explore ethical and professional counseling techniques.',
                              'Discuss individual uniqueness and personalities and its role in counseling.',
                              'Introduce normal and abnormal behavior coping strategies.',
                              'Acquire skills in counseling persons who are seriously ill and facing death.'],
        'programme_outcomes' : [
                            'Demonstrate interest in community development as a generalist social work practice.',
                            'Discuss human diversity in the political-economic, socio-cultural, and socio-ecological forces.',
                            'Apply practical skills and knowledge of social development.',
                            'Demonstrate an attitude and professional responsibility towards community development.',
                            'Utilize the skills needed in evaluating the planned changes in local communities, organizations, institutions, and social action programs.'],
        'programme_tuition': '393,000',
        'programme_duration': '2 years',
        'programme_distance_learning': 'Null'
                                              
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
      //   'programme_duration': ''
      //   'programme_distance_learning': 'Null'
                                              
      // }
      // {
      //   'Id': 2,
      //   'programmeName':'Diploma in Church Ministry'        
      // }   
    ];
    return {  programmes };
  }
}
