import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LocationListingComponent } from './modules/location-listing/location-listing.component';


const routes: Routes = [{
  path:'',
  // component: LoginComponent,
  children: [{
    path:'',
    component: LoginComponent
  },
  {
    path:'app',
    component: DefaultComponent,
    children: [  {
      path:'dashboard',
      component: DashboardComponent
    },
    {
      path:'location',
      component: LocationListingComponent
    }]
  }]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
