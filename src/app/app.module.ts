import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AboutUsModule } from './about-us/about-us.module';
import { ProgrammeModule } from './programme/programme.module';
import { UserModule } from './user/user.module';
import { ContactUsModule } from './contact-us/contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponentComponent,
        
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AboutUsModule,
    ProgrammeModule,
    ContactUsModule,
    UserModule,    
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
