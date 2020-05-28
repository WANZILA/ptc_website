import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AboutUsModule } from './about-us/about-us.module';
import { UserModule } from './user/user.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { QuestionComponent } from './question/question.component';
//import { StudentDashboardRoutingModule } from './student-dashboard/student-dashboard-routing.module';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { CollegeServicesModule } from './college-services/college-services.module';
import { CollegeProjectsModule } from './college-projects/college-projects.module';

import { ProgrammeData } from 'src/api/programme-data';
import { SharedModule } from './shared/shared.module';
// import { ApplyNowComponent} from './shared/apply-now/apply-now.component'

//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponentComponent,
    QuestionComponent,
    // ApplyNowComponent
    //TestmoniesComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProgrammeData, { delay: 1000 }),
    //  HttpClientInMemoryWebApiModule.forRoot(
    //    InMemoryDataService,{ dataEncapsulation: false}
    //  ),   
    AboutUsModule,
    SharedModule,
    StudentDashboardModule,
    CollegeServicesModule, 
    CollegeProjectsModule,   
    ContactUsModule,
    UserModule,  
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
