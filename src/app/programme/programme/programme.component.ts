import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from '../programme.service';
// import { switchMap } from 'rxjs/operators';
// import { ActivatedRoute } from '@angular/router';


import { IProgramme } from '../programme';
// import { Observable } from 'rxjs';
//import { ProgrammeService } from '../programme.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.css']
})
export class ProgrammeComponent implements OnInit {
  // programmes$: Observable<Programme[]>;
  // selectedId: number;
  //create a property for filtering programmes
  _listFilter: string ='Diploma';
 

  //creating a getter to read values and setter to change filtered valuess
  get listFilter(): string{
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProgrammes = this.listFilter ? this.performFilter(this.listFilter) : this.programmes;
  }
  //setting default values
  constructor(
    private programmeService: ProgrammeService,
        
    ) { 
      this.filteredProgrammes = this.programmes;
      this.listFilter = '';
        }
  programmes: IProgramme[] =[
    {
      'id': 1,
      'programmeName':"Diploma in Bible and Theology",
      'programme_data':`
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="../../assets/img/programmes/theology.jpg" alt="Graduate receives transcript">
        </div>
      </div>
   </div> 
      <h1 class="text-edit">  Bibilical Theology </h1> 
      The core course units covered are:
      <ul>
         <li> 
             <b>General church History.</b> This unit  is designed to give an over view of history of the church from birth through Reformation(1517) to the present. An introduction of African church History with a focus in the activities of the missionaries in Africa
         </li><li> 
             <b> World Religions.</b> The unit is a survey of the major world religions with a greater emphasis on their origin and doctrinal positions.</li><li> 
             <b>Christian education. </b>The unit focuses on  the development of education in the church with attentions being given to Sunday school, leadership training, children’s ministry, youth ministry, adult ministries and other related church ministries. </li> <li> 
             <b>Communication skills.</b> The unit is designed to help students interpret written information and apply conventional methods of communication in the English language.</li> <li> 
             <b>The church and community.</b> Greater focus is put on how the church can use the holistic approach to development as an effective tool to enhancing the well-being of communities’ in areas such as  poverty, health, housing, and environment using the participatory evaluation approach.</li> <li> 
             <b>Homiletics. </b>The unit focuses on equipping students with the basic principles for effective biblical preaching.</li><li>  
             <b>Christian Counselling. </b> The unit seeks to assure the students that Bible based counselling, dependent upon Biblical truths and ministry of the Holy Spirit, is superior to all other humanistic approaches to people’s needs.</li> <li> 
             <b>Church and Worship.</b> The unit equips the students with basic knowledge of music to help in church worship.</li> <li>
             <b>Pastoral Ministry.</b> The course unit seeks to show the pastor how they may order their own life and the life of their flock so that their joint service may be most effective in extending the kingdom of God on the earth.</li> <li>
             <b>Apologetics.</b> The student will be exposed to various argument that have ben fronted in defence of the Christian faith. </li> <li> 
             <b>Harm/ Soteriology.</b> This deals with the work of Christ in bringing lost persons into fellowship with God
             <b>Christology.</b> The study of the doctrine of the person and work of Christ.</li> <li> 
             <b>Ecclesiology and Eschatology.</b> The unit looks at the church in the light of what the Bible says are event that will characterize the end of this age.</li> <li> 
          <b>Pentateuch.</b> This course unit is the study of five books of the law i.e from Genesis to Deuteronomy.</li><li>
            <b> Major Prophets.</b> The course covers a detailed study of the books of Isaiah , Jeremiah, Lamentations, Ezekiel and Daniel.</li> <li> 
          <b>Bible Survey.</b> The course seeks to introduce a panoramic view of the Old and New Testament books pointing out the major themes in both the Testaments.</li> <li> 
             <b>Pauline Epistles.</b> The course unit give an over view of Paul’s epistles of Romans, 1 & 2 Corinthians, Galatians and the prison epistles but with greater emphasis on Romans and Corinthians.</li> <li> 
             <b>Hebrews.</b> This is a detailed study of the book, beginning with authorship, date, purpose and destination.</li><li>
             <b> Acts of the Apostles. </b>This course unit cover the origin and spread of the Church with emphasis on the role of the Holy Spirit.</li> <li> 
          <b> Hermeneutics.</b> This is the study of principles and tools used in sound interpretation of the Bible.</li>
      </ul>
      `,
      'programme_duration':' 2'
      
    },
    {
      'id': 2,
      'programmeName':`   Certificate in Church Ministry `,
      'programme_data': ` certificate  `,
      'programme_duration': '2'
    },
    {
      'id': 3,
      'programmeName':`Diploma in ICT`,
      'programme_data':`
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="../../assets/img/programmes/ict.jpg" alt="Graduate receives transcript">
              </div>
            </div>
        </div> 
            <h1 class="text-edit">  Information Communication Technology </h1> 
            <p>
                    Information Technology program is designed to provide learners with foundational skills, knowledge and competencies in
                    ICTs that enable them to install, oversee, tune, trouble-shoot and maintain computer systems and design solutions to
                      common ICT challenges in organizations and among individual ICTs users. It is intended to provide learners with hands-on 
                      abilities so they can be ICT support staff in an organization or to start their own ICT services to meet the pervasive 
                      need for ICT technicians as computers become a must-have and essential gadget.
                </p>  
            <hr class="hr-course-edit">
            <h2 class="text-edit">PROGRAMME OBJECTIVES</h2> 
            This course aims at:
            <ol>
                    <li> Introducing the students to concepts, with theoretical and practical skills in Information Communications Technology (ICT).</li>
                    <li>Prepare students to undertake further studies in ICT fields. </li>
                    <li> Equipping students with skills and knowledge to manage and maintain computer systems.</li>
                    <li>Equipping students with skills for self-employment. </li>
                    <li>Stimulate the learners’ creative mind to participate in development of ICT-based applications.</li>
            </ol>

            <hr class="hr-course-edit"> 
            <h2 class="text-edit">PROGRAMME LEARNING OUTCOMES</h2>
            Upon successful completion of this course, students will be able to:
            <ol> 
                    <li>Apply the concepts, theoretical, and practical skills in Information Communications Technology (ICT). </li>
                    <li>Pursue further studies in ICT fields. </li>
                    <li>Manage and maintain computer systems. </li>
                    <li> Utilize the skills and knowledge of ICT for self-employment.</li>
                    <li>Demonstrate creativity in the development of ICT-based applications. </li>
            </ol>
      `,
      'programme_duration': '2'
    },
    {
      'id':4,
     'programmeName':'Certificate in ICT',
      'programme_data':`this works`,
      'programme_duration': '2'
    }
  ];
  
  filteredProgrammes: IProgramme[];
  

    performFilter(filterBy: string): IProgramme[] { 
      filterBy = filterBy.toLocaleLowerCase();
      return this.programmes.filter((programme: IProgramme) =>
        programme.programmeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }


  ngOnInit(): void {
    // this.programmes$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = +params.get('id');
    //     return this.service.getProgrammes();
    //   })
    // )
    // this.programmeService.getProgrammes().subscribe(
    //   programmes => {
    //     this. programmes = programmes;
      //}
  //  )

  }

  onClickAll(){
     this.listFilter = '';
  }
  onClickDiploma(){
    // this.filteredProgrammes = this.programmes;
       this.listFilter = 'Diploma';
  }
  onClickCertificate(){
    // this.filteredProgrammes = this.programmes;
       this.listFilter = 'Certificate';
  }


}
