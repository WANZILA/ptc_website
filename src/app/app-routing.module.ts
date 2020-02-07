import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsModule } from './about-us/about-us.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
	  path:'product',
	  loadChildren:'./programme/programme.module#ProgrammeModule'
	  
	 /*  loadChildren: './products/product.module#ProductModule'},*/
  },
  {
    path: '' , redirectTo: 'home', pathMatch:'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AboutUsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
