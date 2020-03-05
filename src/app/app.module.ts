import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ProgrammeModule } from './programme/programme.module';
import { UserModule } from './user/user.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { QuestionComponent } from './question/question.component';
//import { StudentDashboardRoutingModule } from './student-dashboard/student-dashboard-routing.module';
import { StudentDashboardModule } from './student-dashboard/student-dashboard.module';
import { CollegeServicesModule } from './college-services/college-services.module';
import { CollegeProjectsModule } from './college-projects/college-projects.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponentComponent,
    QuestionComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
     HttpClientInMemoryWebApiModule.forRoot(
       InMemoryDataService,{ dataEncapsulation: false}
     ),   
    AboutUsModule,
    StudentDashboardModule,
    ProgrammeModule,
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
